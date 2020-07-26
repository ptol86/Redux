import  store  from './store';
import  { setUser, removeUser}  from './user.actions';
import  { setLanguage } from './language.actions';
import  { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => console.log(store.getState()))

const user = { id: 76, name: 'Sarah' };
const user2 = { id: 716, name: 'Tom' };


store.dispatch(setLanguage("jp"))
store.dispatch(addProduct({ id: 76, name: 'milk' }))
store.dispatch(setUser(user))
// store.dispatch(removeProduct(76))
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
let result = { language: 'en', user: null, cart: {
    products: []
}}
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())


