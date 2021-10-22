import { UserProps } from "./User"

export class Attributes<T> {
  constructor(
    private data: T
  ){}

  get<K extends keyof T> (key: K): T[K] {
    // K extends key of T => Specify the specific string(which is the key of object User) as its type
    // T[K] => Specify the specific value of object as th return type
    return this.data[key]
  }

  set (update: T):void {
    this.data = {
      ...this.data,
      ...update
    }
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  name: 'Vicky Vicky',
  age: 20
})

console.log(attrs.get('id'))
