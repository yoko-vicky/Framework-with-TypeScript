import axios, { AxiosResponse } from 'axios'

interface UserProps {
  id?: number
  name?: string
  age?: number
  [key: string]: string | number | undefined
}

export class User {
  constructor(
    private data: UserProps
  ) { }

  get (propName: string) {
    return this.data[propName]
  }
//
  set (update: UserProps):void {
    this.data = {
      ...this.data,
      ...update
    }
  }

  fetch (): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        console.log(response)
        this.set(response.data as UserProps)
    })
  }

  save (): void {
    const id = this.get('id')
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}
