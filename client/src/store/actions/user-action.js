import axios from 'axios'

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