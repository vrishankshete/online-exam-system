const actionTypes = {
    STUDENT_DATA_LOADED:"STUDENT_DATA_LOADED",
    SET_TEST:"SET_TEST"
}

export const studentDataLoaded = (data)=>{
    return {
        type:actionTypes.STUDENT_DATA_LOADED,
        payload:data
    }
}

export const setTest = (data)=>{
    return {
        type:actionTypes.SET_TEST,
        payload:data
    }
}

export default actionTypes;