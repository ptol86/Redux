import React from 'react';
import User from './User';
import Pagination from './Pagination';
import * as userActions from "./users.actions"
import {usersListSelector, currentPageSelector} from "./users.selectors"
import { connect } from "react-redux"

const itemsPerPage = 3;

const UsersList = ({users, currentPage, goNext, goPrev}) => {
    
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const usersToShow = users.slice(startIndex, endIndex);

    return (
    <div>
        <Pagination goNext={goNext} 
            goPrev={goPrev} 
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage} 
            totalItems={users.length}/>
        <ul className="users">
            {usersToShow.map(user => {
                return <User key={user.id} {...user}/>
            }
            )}
        </ul>
    </div>)
    
};

const mapState = (state) => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state)
    };
};

const mapDispatch = {
    goPrev: userActions.goPrev,
    goNext: userActions.goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
