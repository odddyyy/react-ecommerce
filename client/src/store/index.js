import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'

const reducers = combineReducers({
    //all reducers
    userReducer,
    productReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store