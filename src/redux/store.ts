import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postReducer from "./PostSlice";
import messageReducer from "./MessageSlice";
import authReducer from "./AuthSlice";
import friendReducer from "./FriendSlice";

const rootReducer = combineReducers({
    postReducer,
    messageReducer,
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