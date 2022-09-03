import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from "./root.reducer";
import {createLogger} from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(createLogger({
    collapsed: true
})))

export default store