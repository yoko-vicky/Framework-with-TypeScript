import { User } from "./models/User";

const user = new User({ name: 'Asahi', age: 41 })

user.attributes.get('id')
user.attributes.get('name')
user.attributes.get('age')
user.on('change', () => {
  console.log('POhasjlasjkal')
});
