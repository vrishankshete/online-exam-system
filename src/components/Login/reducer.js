import actionTypes from './actions';
import { Map } from "immutable";

const initialState = Map({
    sessionToken:null
});

export default function loginReducer(state=initialState, action) {

    switch(action.type){
        case actionTypes.SET_TOKEN:
            return state.merge({sessionToken:action.payload});
        default :
            return state;
    }
}