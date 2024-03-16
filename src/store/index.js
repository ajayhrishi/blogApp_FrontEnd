import { createSlice, configureStore} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducers:{
        logIn(state){
            state.isLoggedIn= true
        },
        logOut(state){
            state.isLoggedIn=false
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer // Use authSlice.reducer, not authSlice.reducers
});
