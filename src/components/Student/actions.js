const actionTypes = {
    STUDENT_DATA_LOADED:"STUDENT_DATA_LOADED",
    OBJ_ANSWER_SELECTED:"OBJ_ANSWER_SELECTED",
    SUB_ANSWER_SELECTED:"SUB_ANSWER_SELECTED"
}

export const studentDataLoaded = (data)=>{
    return {
        type:actionTypes.STUDENT_DATA_LOADED,
        payload:data
    }
}

export const objAnsSelected = (data)=>{
    return {
        type:actionTypes.OBJ_ANSWER_SELECTED,
        payload:data
    }
}

export const subAnsSelected = (data)=>{
    return {
        type:actionTypes.SUB_ANSWER_SELECTED,
        payload:data
    }
}

export default actionTypes;