import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K>{
  regions: { [key: string]: Element } = {}

  constructor (
    public parent: Element,
    public model: T
  ) {
    this.bindModel()
  }

  abstract template (): string

  regionsMap (): { [key: string]: string }{
    return {}
  }

  eventsMap (): { [key: string]: () => void; } {
    return {}
  }

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

  mapRegions (fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      this.regions[key] = fragment.querySelector(selector) as HTMLElement
    }
  }

  onRender(): void {}

  render (): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    // Bind events to template fragment(content) using eventsMap
    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    // Nesting Views
    this.onRender()

    this.parent.appendChild(templateElement.content)
  }
}
