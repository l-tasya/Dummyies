import {combineReducers} from "@reduxjs/toolkit";
import {favoritesReducer} from "../features/Favorites";


export const rootReducer = combineReducers({
    favorites: favoritesReducer,

})