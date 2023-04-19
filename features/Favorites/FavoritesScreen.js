import {StyleSheet, Text, View} from 'react-native';
import MealsList from "../../components/MealList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../../app/favorites-context";
import {MEALS} from "../../data/dummy-data";
import Colors from "../../utils/Colors";
import {LinearGradient} from "expo-linear-gradient";

const FavoritesScreen = () => {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
    if (favoriteMeals.length === 0) {
        return (
            < LinearGradient
                colors={[Colors.primary800, Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]}
                style={styles.container}>
                <View>
                    <Text style={styles.title}>You have no favorite meals yet.</Text>
                </View>
            </LinearGradient>
    )
    }
    return <MealsList items={favoriteMeals}/>

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    }
})
export default FavoritesScreen;