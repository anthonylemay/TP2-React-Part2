import { createSlice } from '@reduxjs/toolkit'
import reducers from './mealsReducers';

export const mealsSlice = createSlice({
	name: 'meals',
	initialState: {
		meals: []
	},
	reducers: reducers,
});

export const { updatemeals } = mealsSlice.actions;

export default mealsSlice.reducer;
