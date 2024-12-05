import { legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
 import {thunk} from "redux-thunk"
import GetApiReducer from "../src/reducer/api/GetApiReducer"

 const rootReducer= combineReducers({
    get:GetApiReducer
 })





 const store= createStore(rootReducer,applyMiddleware(thunk))

 export default store;