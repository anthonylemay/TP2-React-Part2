const reducers = {
    addFavorite: (state, action) => {
        // Note: Instead of directly pushing, we're ensuring the structure is correct.
        const favoriteMeal = {
            ...action.payload.meal,
            categoryName: action.payload.categoryName
        };
        state.favorites.push(favoriteMeal);
    },
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter((favorite) => favorite.idMeal !== action.payload.idMeal);
    }
}

export default reducers;
