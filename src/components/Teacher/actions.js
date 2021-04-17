const actionTypes = {
    SUB_Q_ADDED:"SUB_Q_ADDED",
    OBJ_Q_ADDED:"OBJ_Q_ADDED",
    DELETE_SUB_Q:"DELETE_SUB_Q",
    DELETE_OBJ_Q:"DELETE_OBJ_Q",
}

export const subQAdded = (q)=>{
    return {
        type:actionTypes.SUB_Q_ADDED,
        payload:q
    }
}

export const objQAdded = (q)=>{
    return {
        type:actionTypes.OBJ_Q_ADDED,
        payload:q
    }
}

export const deleteSubQ = (qNo)=>{
    return {
        type:actionTypes.DELETE_SUB_Q,
        payload:qNo
    }
}

export const deleteObjQ = (qNo)=>{
    return {
        type:actionTypes.DELETE_OBJ_Q,
        payload:qNo
    }
}

export default actionTypes;