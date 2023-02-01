import { createSlice } from '@reduxjs/toolkit';
const intialState = {
	user: null,
};
const userSlice = createSlice({
	name: 'userSlice',
	intialState,
	reducers: {},
});
/* eslint-disable */
export const {} = userSlice.actions;
export default userSlice.reducer;
