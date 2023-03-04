import { createSlice } from "@reduxjs/toolkit";
export const intialUserState = null;

const userSlice = createSlice({
	name: "userSlice",
	initialState: intialUserState,
	reducers: {
		setUser: (state, action) => {
			return action.payload;
		},
	},
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
