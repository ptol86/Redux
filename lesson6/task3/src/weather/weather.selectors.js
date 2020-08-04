// import { createSelector } from "reselect";
 

export const weatherDataSelector = state => {
    return state.weatherData;
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