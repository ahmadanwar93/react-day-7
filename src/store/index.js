// import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "../reducers/loginReducer"
// import userReducer from "../reducers/userReducer"


// export default configureStore({
//     reducer: {
//         userData: userReducer,
//         loginUser: loginReducer,
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducers/index'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const can only be defined after all the imports
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    })
    let persistor = persistStore(store)

    export {store, persistor}

// this is day 7 mobile


