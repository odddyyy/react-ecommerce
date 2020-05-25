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
            
        case 'UPDATE_PRODUCT':
            const { id, name, quantity, price, image, category } = action.payload
            let updated = [...state.products]
            updated.forEach(i => {
                if (i.id === id) {
                    i.name = name
                    i.quantity = quantity
                    i.price = price
                    i.image = image
                    i.category = category
                }
            })
            return {...state, products: updated}

        default:
            return state
    }
}

export default productReducer