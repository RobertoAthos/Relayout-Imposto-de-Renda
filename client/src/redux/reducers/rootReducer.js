import { combineReducers } from "redux";
import {UserAuthReducer} from './authReducer'

const rootReducer = combineReducers({
    auth: UserAuthReducer
})

export default rootReducer