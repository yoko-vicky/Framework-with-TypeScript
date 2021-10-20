import { User } from "./models/User";

const user = new User({ name: 'Asahi', age: 41 })
user.save()
