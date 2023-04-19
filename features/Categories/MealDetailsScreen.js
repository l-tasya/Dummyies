import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useContext, useLayoutEffect} from "react";
import Colors from "../../utils/Colors";
import MealDetails from "../../components/MealDetails";
import {LinearGradient} from "expo-linear-gradient";
import {shadowStyles} from "../../assets/style";
import List from "../../components/List";
import IconButton from "../../components/IconButton";
import {FavoritesContext} from "../../app/favorites-context";

const MealDetailsScreen = ({navigation, route}) => {
    let meal = route.params.meal
    let mealID = meal.id
    const favoritesCtx = useContext(FavoritesContext)
    const mealIsFavoriteValue = favoritesCtx.ids.includes(mealID)
    const changeFavoriteStatusHandler = () => {
        if (mealIsFavoriteValue) {
            favoritesCtx.removeFavorite(mealID)
        } else {
            favoritesCtx.addFavorite(mealID)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        })
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavoriteValue ? 'star' : 'star-outline'}
                    color={'white'}
                    onPress={changeFavoriteStatusHandler}
                />
            }
        })
    }, [navigation, meal.title, mealIsFavoriteValue])
    return (
        <LinearGradient colors={[Colors.primary700, Colors.primary600, Colors.accent500]} style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: meal.imageUrl}}/>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <MealDetails
                    affordability={meal.affordability}
                    complexity={meal.complexity}
                    duration={meal.duration}
                    textStyle={{color: 'white', fontWeight: 'bold', fontSize: 14}}
                />
                <List title={'Ingredients'} data={meal.ingredients}/>
                <List title={'Steps'} data={meal.steps} numeric/>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        minWidth: '80%',
        height: 300,
    },
    imageContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 18,
        ...shadowStyles,
    },
    title: {
        fontStyle: 'italic',
        fontSize: 16,
        margin: 8,
        textAlign: "center",
    },

    box: {
        marginHorizontal: 20,
        borderRadius: 8,
        ...shadowStyles,
        backgroundColor: 'white',
    },


})
export default MealDetailsScreen;