import { createSlice, configureStore} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducers:{
        logIn(state){
            console.log();
            state.isLoggedIn= true
            console.log('loging statement in the redux is triggered and changed value to ',state.isLoggedIn);
        },
        logOut(state){
            console.log('logout statement in the redux is triggered');
            state.isLoggedIn=false
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer // Use authSlice.reducer, not authSlice.reducers
});
