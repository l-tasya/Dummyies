import {createContext, useState} from "react";
import {StyleSheet} from 'react-native';


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    }
})


export function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((prevState) => [...prevState, id])
    }

    function removeFavorite(id) {
        setFavoriteMealIds(prevState => prevState.filter((t) => t !== id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite,
        removeFavorite,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

const styles = StyleSheet.create({})