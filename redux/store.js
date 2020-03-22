import { createStore } from 'redux'
import countersReducer from './counters'

const store = createStore(countersReducer)

export default store;