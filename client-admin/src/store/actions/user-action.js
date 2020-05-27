import axios from 'axios'
const SERVER_URL = 'http://localhost:3001'

export const loggingIn = (data) => {
    return async dispatch => {
        const { name, token, admin } = data
        await dispatch({
            type: 'LOGGING_IN',
            payload: {
                name,
                token,
                admin
            }
        })
    }
}

export const loggingOut = () => {
    return async dispatch => {
        dispatch({ type: 'LOGGING_OUT' })
    }
}

export const getAllUser = () => {
    return async dispatch => {
        const { data } = await axios(`${SERVER_URL}/user`)
        await dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }
}