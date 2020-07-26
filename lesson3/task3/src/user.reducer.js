import  {SET_USER, REMOVE_USER} from './user.actions';

const initialState = null

const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_USER: {
                return {
                state: action.payload.userData
            };
        }
        case REMOVE_USER:{
            const clearList = null
            return {
            clearList,
            }
        };
        
        default: 
            return state;
    }
}


export default userReducer;


