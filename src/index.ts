import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

// CREATE USER COLLECTION OBJECT
const collection = User.buildUserCollecton()
collection.on('change', () => {
  console.log(collection)
});
collection.fetch()


// CREATE AND RENDER USER EDIT IN DOM
const user = User.buildUser({name: 'Onimaru', age: 20})
const userEdit = new UserEdit(document.getElementById('app') as HTMLElement, user)
userEdit.render()
console.log(userEdit)
