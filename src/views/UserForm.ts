export class UserForm {
  constructor(
    public parent: Element
  ) { }

  template (): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Submit</button>
    </div>
    `
  }
  render (): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.parent.appendChild(templateElement.content)
  }
}
