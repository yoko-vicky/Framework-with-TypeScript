interface UserProps {
  name: string,
  age: number,
  [key: string]: string | number | undefined,
}

type Callback = () => {}

export class User {
  constructor(
    private data: UserProps
  ) { }

  get (propName: string) {
    return this.data[propName]
  }
//
  set (update: Partial<UserProps>):void {
    this.data = {
      ...this.data,
      ...update
    }
  }

  // on (eventName: string, callback: Callback) {
  //   //
  // }

  // trigger (eventName: string): void {
  //   //
  // }

  // fetch (): Promise { }
  // save(): Promise {}
}
