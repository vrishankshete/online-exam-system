import {combineReducers} from "redux";
import teacherReducer from "../components/Teacher/reducer";

export default combineReducers({
    teacher: teacherReducer
});