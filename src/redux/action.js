 export const addContact = (detail) => {
    return {
        type: 'ADD_CONTACT',
        payload: detail
    }
}
export const updateContact= (newdata) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: newdata
    }
}
export const deleteContact= (id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: id
    }
}