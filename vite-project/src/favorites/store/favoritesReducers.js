const reducers = {
    addFavorite: (state, action) => {
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
