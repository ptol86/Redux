import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer';
import languageReducer from "./language.reducer"
import productsReducer from "./cart.reducer"

const appReducer = combineReducers({
    language: languageReducer,
    user: userReducer,
    cart: productsReducer,
})

const store = createStore(appReducer);

export default store;


