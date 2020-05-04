import axios from 'axios'
const SERVER_URL = 'http://localhost:3001'

export const getProducts = () => {
    return async dispatch => {
        const { data } = await axios(`${SERVER_URL}/product`)
        console.log(data)
        await dispatch({
            type: 'GET_PRODUCTS',
            payload: {
                products: data
            }
        })
    }
}