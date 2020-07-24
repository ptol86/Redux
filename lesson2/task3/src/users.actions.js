
export const ADDUSER = "USERS/ADDUSER";

export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (user) => {
    return {
        type: ADDUSER,
        user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETEUSER,
        id
    }
}


