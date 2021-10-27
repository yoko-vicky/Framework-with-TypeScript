import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { User, UserProps } from './User'

export class Collection<T, K> {
  models: T[] = []
  events: Eventing = new Eventing()

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) { }

  get on () {
    return this.events.on
  }

  get trigger () {
    return this.events.trigger
  }

  fetch ():void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          const user = User.buildUser(value)
          this.models.push(this.deserialize(value))
      })
      })
    this.trigger('change')
  }
}
