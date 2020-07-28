import { createStore, combineReducers } from 'redux';
import usersReducer from "./users/users.reducer";


const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;







// import { createStore } from 'redux';
// // import counterReducer from './counter/counter.reducer';
// import usersReducer from './users/users.reducer';
// import { createStore, combineReducers } from 'redux';


// // const reducer = combineReducers({
// //     users: usersReducer,
// //     // counter: counterReducer
// // });

// const store = createStore(usersReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
