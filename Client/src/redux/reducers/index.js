import { combineReducers } from 'redux'
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import topSmartphoneReducer from './topSmartphoneReducer'
import getInfoProductReducer from './getInfoProductReducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
    topSmartphoneReducer,
    getInfoProductReducer
})