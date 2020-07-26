import { SETLANGUAGE } from "./language.actions"

const initialState = "en";

const languageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SETLANGUAGE: 
            return action.payload.language;
        
        default: 
            return state;
    }
}

export default languageReducer;