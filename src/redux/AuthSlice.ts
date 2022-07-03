import { createSlice } from '@reduxjs/toolkit';
interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false,
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        trueAuth (state) {
            state.isAuth = true;
        },
        falseAuth (state) {
            state.isAuth = false;
        }
    }
})
export default authSlice.reducer;