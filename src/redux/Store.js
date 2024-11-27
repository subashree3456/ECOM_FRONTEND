import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducers } from "./reducers";

const persistConfiq={
    key:"root",
    storage,
    whitelist:['auth']
}
const  persistedReducer=persistReducer(persistConfiq,rootReducers)



export const store = configureStore({
    reducer:persistedReducer
   
  });

  export const persistor=persistStore(store)