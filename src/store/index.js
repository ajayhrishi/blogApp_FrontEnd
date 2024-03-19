import { createSlice, configureStore} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"AuthSlice",
    initialState:{isLoggedIn:false,isSignUp:false},
    reducers:{
        logIn(state){
            console.log('isLoggedIn reducer the intial state of it is',state.isLoggedIn);
            console.log();
            state.isLoggedIn= true
            console.log('loging statement in the redux is triggered and changed value to ',state.isLoggedIn);
        },
        logOut(state){
            console.log('logout statement in the redux is triggered');
            state.isLoggedIn=false
        },
        setIsSignUp(state,action){
            state.isSignUp= action.payload;
        }
    }
});

export const { logIn, logOut,setIsSignUp } = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer // Use authSlice.reducer, not authSlice.reducers
});

export default store;