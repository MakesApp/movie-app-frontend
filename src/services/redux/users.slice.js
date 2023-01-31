import { createSlice } from "@reduxjs/toolkit";
const intialState={
    users:[]
}
const userSlice=createSlice({
name:"userSlice",
intialState,
reducers:{
    loggedin:(state=intialState)=>{
        state.users.push({
            isLoggedin:false
        })



    }
        
    

}
})
export const {loggedin}=userSlice.actions
export default userSlice.reducer