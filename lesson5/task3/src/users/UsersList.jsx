import React from "react";
import User from "./User";
import Filter from "./Filter";
import {selectedUsersListSelector, filterTextSelector} from "./users.selectors";
import { connect } from 'react-redux';
import { inputFilterText } from './users.actions';


const UsersList = (users) => {
    let {usersList, filterText, inputFilterText} = users;

    const onChange = event => {
        filterText = event.target.value;
        inputFilterText(filterText);
    } 
    const filteredUsersList = usersList.map(
        user => <User key={user.id}
          {...user} />)

    return (
        <>
            <Filter 
                inputText={filterText}
                count={usersList.length} 
                onChange={onChange}

            />
            <ul className="users">
            {filteredUsersList}
            </ul>
        </>
        
    )
    
}


const mapState = state => {
    return {
        usersList: selectedUsersListSelector(state),
        filterText: filterTextSelector(state)
    }
}
const mapDispatch = {
    inputFilterText
}



export default connect(mapState, mapDispatch)(UsersList);


