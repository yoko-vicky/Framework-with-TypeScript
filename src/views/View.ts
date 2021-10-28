import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K>{
    constructor(
    public parent: Element,
    public model: T
  ) {
    this.bindModel()
  }

  abstract eventsMap (): { [key: string]: ()=>void }
  abstract template (): string

  bindModel ():void {
    this.model.on('change', () => {
      this.render()
    })
  }

  // NOTE: The content of templates are of the DocumentFragment type
  bindEvents (fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render (): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    // Bind events to template fragment(content) using eventsMap
    this.bindEvents(templateElement.content)
    this.parent.appendChild(templateElement.content)
  }
}
