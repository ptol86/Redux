import  store  from './store';
import  { deleteUser, addUser }  from './users.actions';
 

const user = { id: 76, name: 'Sarah' };
const user2 = { id: 716, name: 'Tom' };

const onAddUser = (user) => {
    store.dispatch(addUser(user))
}
// onAddUser(user)
// onAddUser(user2)

const onDeleteUser = (id) => {
    store.dispatch(deleteUser(id))
}
// onDeleteUser(716)

// console.log(store.getState())
// console.log(onAddUser.prototype)

