import { User } from "./models/User";

const user = new User({ name: 'Asahi', age: 41 })

console.log(user.get('id'))
console.log(user.get('name'))
console.log(user.get('age'))


// Reminder how 'this' works in JavaScript

const colors = {
  color: 'red',
  printColor () {
    console.log(this.color)
  }
}
colors.printColor()
