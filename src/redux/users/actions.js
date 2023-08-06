const actions = {
    USERS_GET_BEGIN: "USERS_GET_BEGIN",
    USERS_GET_SUCESS: "USERS_GET_SUCESS",
    USERS_GET_ERR: "USERS_GET_ERR",

    USER_GET_BEGIN: "USER_GET_BEGIN",
    USER_GET_SUCESS: "USER_GET_SUCESS",
    USER_GET_ERR: "USER_GET_ERR",

    USER_UPDATE_BEGIN: "USER_UPDATE_BEGIN",
    USER_UPDATE_SUCESS: "USER_UPDATE_SUCESS",
    USER_UPDATE_ERR: "USER_UPDATE_ERR",

    usersGetBegin: () =>{
        return {
            type: actions.USERS_GET_BEGIN,
        }
    },

    usersGetSucess: (data) =>{
        return {
            type: actions.USERS_GET_SUCESS,
            data
        }
    },
    usersGetErr: (err) =>{
        return {
            type: actions.USERS_GET_ERR,
            err
        }
    },



    userGetBegin: () =>{
        return {
            type: actions.USER_GET_BEGIN,
        }
    },

    userGetSucess: (data) =>{
        return {
            type: actions.USER_GET_SUCESS,
            data
        }
    },
    userGetErr: (err) =>{
        return {
            type: actions.USER_GET_ERR,
            err
        }
    },


    userUpdateBegin: () =>{
        return {
            type: actions.USER_UPDATE_BEGIN,
        }
    },

    userUpdateSucess: (data) =>{
        return {
            type: actions.USER_UPDATE_SUCESS,
            data
        }
    },
    userUpdateErr: (err) =>{
        return {
            type: actions.USER_UPDATE_ERR,
            err
        }
    }
}

export default actions