import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "",
        email: "",
        picture: ""
    },

    reducers: {
        login(state, actions) {
            const { name, email, picture } = actions.payload
            state.name = name
            state.email = email
            state.picture = picture
        },

        logout(state) {
            state.name = ""
            state.email = ""
            state.picture = ""
        }
    }
})

export const authActions = authSlice.actions

export const store = configureStore({
    reducer : authSlice.reducer
})
