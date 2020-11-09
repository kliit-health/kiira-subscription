import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import promise from 'redux-promise-middleware'
import { details, plan, payment, navigator, plans } from 'src/redux/reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({ details, plan, payment, navigator, plans })
const middlewares = applyMiddleware(thunk, promise)
const enhancers = composeWithDevTools(middlewares)

export default createStore(reducers, {}, enhancers)
