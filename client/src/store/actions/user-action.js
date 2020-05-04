import axios from 'axios'
const SERVER_URL = 'http://localhost:3001'

export const loggingIn = (email, password) => {
    return async dispatch => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/login`,
                data: {
                    email,
                    password
                }
            })
            const { name, token, admin } = data

            dispatch({
                type: 'LOGGING_IN',
                payload: {
                    name,
                    token,
                    admin
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}