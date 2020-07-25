import  store  from './store';
import  { deleteUser, addUser, updateUser }  from './users.actions';
import  {increment, decrement, reset} from './counter.actions';

store.subscribe(() => console.log(store.getState()))

const user = { id: 76, name: 'Sarah' };
const user2 = { id: 716, name: 'Tom' };

const onAddUser = (user) => {
    store.dispatch(addUser(user))
}
onAddUser(user)
onAddUser(user2)

const onDeleteUser = (id) => {
    store.dispatch(deleteUser(id))
}
const onUpdateUser = (id, userData) => {
    store.dispatch(updateUser(id, userData))
}
onUpdateUser(716, {name: "John"})
// onDeleteUser(716)

// console.log(store.getState())
// console.log(onAddUser.prototype)
// store.subscribe(() => {
//     const state = store.getState();
//     const currentValue = state.history.reduce((acc, value) => acc + Number(value), 0);
//     const historyString = state.history.join("");
//     resultElem.textContent = state.history.length === 0
//     ? ""
//     : `${historyString} = ${currentValue}`;
        
// })

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())


