import { User } from './models/User'

console.log('Hi there')
const user = new User({name: 'Vicky', age: 30})
console.log(user.get('name'))
console.log(user.get('age'))

user.set({ name: 'Mario'})
console.log(user.get('name'))

user.set({ age: 90 })
console.log(user.get('age'))


user.set({ name: 'Snoopy', age: 1000 })
console.log(user.get('name'))
console.log(user.get('age'))
