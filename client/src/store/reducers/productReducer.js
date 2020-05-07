const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload.products}

        case 'ADD_PRODUCT':
            const updatedProducts = [...state.products, action.payload]
            return {...state, products: updatedProducts}

        case 'DEL_PRODUCT':
            const newProducts = []
            state.products.forEach(i => {
                if (i.id != action.payload) newProducts.push(i)
            })
            return {...state, products: newProducts}
    
        default:
            return state
    }
}

export default productReducer