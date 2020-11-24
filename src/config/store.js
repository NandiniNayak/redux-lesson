// import { createContext, useContext } from "react"

// // the context object
// export const StateContext = createContext()

// // a custom hook that wraps useContext
// export const useGlobalState = () => useContext(StateContext)

import {combineReducers, createStore} from 'redux'
import stateReducer from './stateReducer'

// store takes reducer as an argument

// rootReducer = combineReducers(stateReducer, blogReducer, someOtherReducer)

const store = createStore(stateReducer)

export default store