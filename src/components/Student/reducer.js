import actionTypes from './actions';
import {List, Map} from "immutable";

const initialState = Map({
    studentId:null,
    batchId:null,
    subQList:List(),
    // [""]
    subAnsList:List(),
    objQList:List(),
    // [{
    //     q:"",
    //     options:[]
    // }]
    objAnsList:List()
});

export default function studentReducer(state=initialState, action) {

    switch(action.type){
        case actionTypes.STUDENT_DATA_LOADED:
            return state.merge({
                studentId:action.payload.studentId,
                batchId:action.payload.batchId,
                subQList:List(action.payload.subQList),
                objQList:List(action.payload.objQList),
            });
        case actionTypes.OBJ_ANSWER_SELECTED:
            let objAnsList = state.get('objAnsList').set(action.payload.index, action.payload.answer);
            console.log("Obj Answers: ", objAnsList);
            return state.merge({objAnsList});
        case actionTypes.SUB_ANSWER_SELECTED:
            let subAnsList = state.get('subAnsList').set(action.payload.index, action.payload.answer);
            console.log("Sub Answers: ", subAnsList);
            return state.merge({subAnsList});
        default :
            return state;
    }
}