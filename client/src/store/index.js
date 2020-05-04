import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    //all reducers
    userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store