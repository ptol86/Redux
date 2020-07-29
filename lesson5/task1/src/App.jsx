import React from "react";
import {Provider} from "react-redux";
import ConnectedUsersList from './users/UsersList';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedUsersList />
        </Provider>
    )
}

export default App;
 

