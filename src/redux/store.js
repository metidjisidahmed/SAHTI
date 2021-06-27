import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'


const initalState = {}

const middleware = [thunk , logger]

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware))

export default store;