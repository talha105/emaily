import {combineReducers} from 'redux'
import authReducer from "./authreducer"
import surveysReducer from "./surveysReducer"
import {reducer as formReducer} from 'redux-form'
export default combineReducers({
authReducer,
form:formReducer,
surveys:surveysReducer
})