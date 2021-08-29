export const ADD_USER = "ADD_USER"
export const DELETE_USER = "deleteUser"
export const EDIT_USER = "editUser"

export const addUser = (user) => {
    console.log("addUser", user);
    user.id = Math.random().toString();
    return {
        type: ADD_USER,
        payload: user
    }
}
export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}
export const updatedUser = (editUser) =>{
    return {
        type: EDIT_USER,
        payload: editUser
    }
}