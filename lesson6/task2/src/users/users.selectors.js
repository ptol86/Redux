import { createSelector } from "reselect";
 
export const isFetchingSelector = state => {
    return state.isFetching;
}

export const userDataSelector = state => {
    return state.userData;
}
  
  // export const filterTextSelector = state => {
  //   return state.users.filterText;
  // }
    
  // export const selectedUsersListSelector = createSelector(
  //   [filterTextSelector, usersListSelector],
  //   (filterText, usersList) => {
  //         return usersList.filter(user => user.name.toLowerCase()
  //     .includes(filterText.toLowerCase()));
  //   }
  // );