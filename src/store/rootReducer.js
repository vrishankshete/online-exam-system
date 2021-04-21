import {combineReducers} from "redux";
import teacherReducer from "../components/Teacher/reducer";
import loadingReducer from "../components/Loading/reducer";

export default combineReducers({
    teacher: teacherReducer,
    loading: loadingReducer
});