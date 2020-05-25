import axios from 'axios'
const SERVER_URL = 'http://localhost:3001'

export const getProducts = () => {
    return async dispatch => {
        const { data } = await axios(`${SERVER_URL}/product`)
        const sorted = data.sort((a,b) => a.id - b.id)
        await dispatch({
            type: 'GET_PRODUCTS',
            payload: {
                products: data
            }
        })
    }
}

export const postProduct = (name, quantity, price, category, image) => {
    return async dispatch => {
        const { data } = await axios({
            method: 'POST',
            url: `${SERVER_URL}/product`,
            headers: {token:localStorage.token},
            data: { name, quantity, price, category, image }
        })
        await dispatch({
            type: 'ADD_PRODUCT',
            payload: data
        })
    }
}

export const removeProduct = (id) => {
    return async dispatch => {
        await axios({
            method: 'DELETE',
            url: `${SERVER_URL}/product/${id}`,
            headers: {token:localStorage.token}
        })
        await dispatch({
            type: 'DEL_PRODUCT',
            payload: id
        })
    }
}

export const editProduct = (id, name, quantity, price, image, category) => {
    return async dispatch => {
        await axios({
            method: 'PUT',
            url: `${SERVER_URL}/product/${id}`,
            headers: {token: localStorage.token},
            data: { name, quantity, price, image, category }
        })
        await dispatch({
            type: 'UPDATE_PRODUCT',
            payload: { id, name, quantity, price, image, category }
        })
    }
}
