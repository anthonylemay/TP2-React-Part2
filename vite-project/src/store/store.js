import { configureStore } from '@reduxjs/toolkit'
import mealsReducer from '../meals/store/mealsSlice';
import favoriteReducer from '../favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		meals: mealsReducer,
		favorites: favoriteReducer,
	},
});
