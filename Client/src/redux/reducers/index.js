import { combineReducers } from 'redux'
import signInReducer from './signIn.reducer'
import signUpReducer from './signUp.Reducer'

export default combineReducers({
    signInReducer,
    signUpReducer,
})