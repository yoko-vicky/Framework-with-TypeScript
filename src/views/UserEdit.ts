import { User, UserProps } from '../models/User';
import { View } from './View'

export class UserEdit extends View<User, UserProps> {
  template (): string{
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `
  }
}
