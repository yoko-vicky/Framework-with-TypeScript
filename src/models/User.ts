interface UserProps {
  name: string,
  age: number,
  [key: string]: string | number | undefined,
}

type Callback = () => void

export class User {
  events: { [key: string]: Callback[]; } = {}

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

  on (eventName: string, callback: Callback): void {
    // register callback function on events
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger (eventName: string): void {
    const handlers = this.events[eventName]
    if (!handlers || handlers.length === 0) return

    handlers.forEach((callback) => {
      callback()
    });
  }

  // fetch (): Promise { }
  // save(): Promise {}
}
