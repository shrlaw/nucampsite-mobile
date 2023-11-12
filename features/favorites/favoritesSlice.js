import { createSlice } from '@reduxjs/toolkit';

// Empty array is filled when the user takes an action. Action.payload = value of an object.
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (favorites, action) => {
            // To delete from the list of favorites/remove from array
            if (favorites.includes(action.payload)) {
                return favorites.filter(
                    (favorite) => favorite !== action.payload
                );
            } else {
                favorites.push(action.payload);
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;