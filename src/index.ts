import { User } from "./models/User";

const user = new User({ name: 'Mario', age: 21 })

user.on('save', () => {
  console.log(user)
});

user.save()
console.log('Hi')
