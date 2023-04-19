import slice from "./favoritesReducer";

const favoritesReducer = slice.reducer
const favoritesActions = {
    ...slice.actions
}
export {
    favoritesReducer,
    favoritesActions
}