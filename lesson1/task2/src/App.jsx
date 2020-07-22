import React from "react";
import Header from './Header'
import {Context} from './Context'

class App extends React.Component {
    state = {
        userData: {
            name: "Nikola Tesla",
            avatar_url: "https://avatars3.githubusercontent.com/u10001"
        }
    }

    render() {
        return (
        <Context.Provider value={this.state.userData}>
            <div className="page">
                <Header/>
            </div>
        </Context.Provider>
        )
    }
}

export default App;
 

