import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
export const user = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
    error: "",
    },
    reducers: {
      register(state, action){
        localStorage.setItem("user", JSON.stringify(action.payload));
      },
      login(state, action) {
        state.isLoggedIn=true;
        state.currentUser = action.payload;
        },
      logout(state){
        state.isLoggedIn=false;
        state.error="";
        state.currentUser=null;
      },
      setError(state,action){
        state.error=action.payload;
      }
    },
});
const {login,logout,setError, register}=user.actions;
export {logout, register};

export const authLogin = (username, password) => async dispatch=>{
  try {
    const userData = localStorage.getItem('user');
    if (!userData) throw new Error("No User Data");
    else {
      let parsedUser = await JSON.parse(userData);
      if(parsedUser.email === username && parsedUser.password === password){
        dispatch(login(parsedUser));
        toast.success('Signing In Success...', {id:"signin"})
      }else{
        toast.error('Signing In Failed : Invalid Credentials', {id:"signin"})
      }
    }
    
  } catch (err) {
    console.log("ERROR LOGGING IN USER :: ", err.message);
    dispatch(setError(err.message))
}
};
export default user.reducer;