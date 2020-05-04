const initState = {
    name: '',
    isAdmin: false
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGGING_IN':
            localStorage.setItem('token', action.payload.token)
            return {...state, name: action.payload.name, isAdmin: action.payload.admin}
    
        default:
            return state
    }
}

export default userReducer