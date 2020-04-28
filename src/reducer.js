import * as actions from "./constant";

const initialState = {
   lists: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case actions.USER_LIST_SUCCESS:
            return {
                ...state,
                lists: action.list
            };
       
        case actions.USER_LIST_FAILURE:
            return {
                ...state,
                lists: {success: false, ...action.error}
            };
            
        case actions.SEARCH_USER_SUCCESS:
            return {
                ...state,
                lists: state.lists.filter(e => e.name === action.name)
            };
     
            default:
                return state;
        }
    }
    