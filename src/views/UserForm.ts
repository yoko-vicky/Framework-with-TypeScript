import { View } from './View'
import { User, UserProps } from '../models/User'


export class UserForm extends View<User, UserProps>{

  eventsMap (): { [key: string]: ()=>void }{
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  // To make 'this' work properly, convert method to arrow function expression
  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input') as HTMLInputElement
    this.model.set({name: input.value})
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  template (): string {
    return `
    <div>
      <input value="${this.model.get('name')}"/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `
  }
}
