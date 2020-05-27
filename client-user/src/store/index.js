import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

//reducers import

const reducers = combineReducers({
    //all reducers
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store