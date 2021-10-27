import { Model } from './Model'
import { ApiSync } from './ApiSync'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost3000/users'

export class User extends Model<UserProps>{
  static buildUser (attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
      )
  }
}

// const user = User.buildUser({id: 1, name: 'Vicky', age: 30})
// user.get('id')
// user.get('name')
// user.get('age')
// user.fetch()
