export class UserForm {
  constructor(
    public parent: Element
  ) { }

  eventsMap (): { [key: string]: ()=>void }{
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    }
  }
  onButtonClick ():void {
    console.log('Hi there')
  }

  onHeaderHover ():void {
    console.log('Wow!')
  }

  template (): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Click</button>
    </div>
    `
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
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.parent.appendChild(templateElement.content)
  }
}
