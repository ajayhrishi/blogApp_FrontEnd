import { createSlice, configureStore} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"AuthSlice",
    initialState:{isLoggedIn:false,isSignUp:false},
    reducers:{
        logIn(state){    
            console.log();
            state.isLoggedIn= true
        },
        logOut(state){
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