import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postReducer from "./PostSlice";
import authReducer from "./AuthSlice";
import friendReducer from "./FriendSlice";

const rootReducer = combineReducers({
    postReducer,
    authReducer,
    friendReducer,
})
export const setupStore = () => {
    return configureStore ({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']