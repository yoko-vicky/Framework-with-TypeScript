import { User } from '../models/User'

export class UserForm {
  constructor(
    public parent: Element,
    public model: User
  ) {
    this.bindModel()
  }

  bindModel ():void {
    this.model.on('change', () => {
      this.render()
    })
  }

  eventsMap (): { [key: string]: ()=>void }{
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    }
  }

  // To make 'this' work properly, convert method to arrow function expression
  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')
    this.model.set({name: input.value})
  }

  template (): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input value="${this.model.get('name')}"/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
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
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    // Bind events to template fragment(content) using eventsMap
    this.bindEvents(templateElement.content)
    this.parent.appendChild(templateElement.content)
  }
}
