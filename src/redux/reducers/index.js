import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";


const rootReducers=combineReducers({
    auth:AuthSlice
})

export {rootReducers}