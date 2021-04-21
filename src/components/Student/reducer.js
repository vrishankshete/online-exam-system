import actionTypes from './actions';
import {List, Map} from "immutable";

const initialState = Map({
    subQList:List(),
    // [""]
    objQList:List()
    // [{
    //     q:"",
    //     options:[]
    // }]
});

export default function teacherReducer(state=initialState, action) {

    switch(action.type){
        case actionTypes.SUB_Q_ADDED:
            let subQList = state.get('subQList').push(action.payload);
            return state.merge({subQList});
        case actionTypes.OBJ_Q_ADDED:
            let objQList = state.get('objQList').push(action.payload);
            return state.merge({objQList});
        case actionTypes.DELETE_OBJ_Q:
            let objQList1 = state.get('objQList').delete(action.payload);
            return state.merge({objQList: objQList1});
        case actionTypes.DELETE_SUB_Q:
            let subQList1 = state.get('subQList').delete(action.payload);
            return state.merge({subQList: subQList1});
        default :
            return state;
    }
}