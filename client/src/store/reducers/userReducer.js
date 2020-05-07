const initState = {
    name: '',
    isAdmin: false,
    users: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGGING_IN':
            localStorage.setItem('token', action.payload.token)
            return {...state, name: action.payload.name, isAdmin: action.payload.admin}
        
        case 'LOGGING_OUT':
            localStorage.removeItem('token')
            return {...state, name: '', isAdmin: false}

        case 'GET_USERS':
            return {...state, users: action.payload}
        
        default:
            return state
    }
}

export default userReducer