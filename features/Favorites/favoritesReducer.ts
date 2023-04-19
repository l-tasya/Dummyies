import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ids: [] as Array<string>
}

const slice = createSlice({
    name: 'favorites',
    initialState:initialState,
    reducers: {
        addFavorites(state, action) {
            state.ids.push(action.payload.id)

        },
        removeFavorites(state, action) {
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        },
    },
})
export const addAC = slice.actions.addFavorites
export const removeAC = slice.actions.removeFavorites


export default slice;