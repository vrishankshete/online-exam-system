const actionTypes = {
    SET_TOKEN:"SET_TOKEN"
}

export const setToken = (token)=>{
    return {
        type:actionTypes.SET_TOKEN,
        payload:token
    }
}

export default actionTypes;