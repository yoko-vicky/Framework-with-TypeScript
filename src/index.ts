import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

// CREATE USER COLLECTION OBJECT
const collection = User.buildUserCollecton()
collection.on('change', () => {
  console.log(collection)
});
collection.fetch()


// CREATE AND RENDER USER FORM IN DOM
const user = User.buildUser({id: 5, name: 'Hana', age: 20})
const form = new UserForm(document.getElementById('app'), user)
form.render()
