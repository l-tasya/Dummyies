import {Image, Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useLayoutEffect} from "react";
import Colors from "../../utils/Colors";
import MealDetails from "../../components/MealDetails";
import {LinearGradient} from "expo-linear-gradient";
import List from "../../components/List";
import IconButton from "../../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {RootStackParamList} from "../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {favoritesActions} from "../Favorites";
import {useActions} from "../../utils/redux-utils";

const MealDetailsScreen = () => {
    const dispatch = useDispatch();
    const {addFavorites, removeFavorites} = useActions(favoritesActions)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, 'MealsDetails'>>()


    let meal = route.params.meal
    let mealID = meal.id
    const favoriteIds = useSelector<AppRootState, string[]>(t => t.favorites.ids)
    const mealIsFavoriteValue = favoriteIds.includes(mealID)
    const changeFavoriteStatusHandler = () => {
        if (mealIsFavoriteValue) {
            dispatch(removeFavorites({id: mealID}))
        } else {
            dispatch(addFavorites({id: mealID}))
            console.log(favoriteIds)
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
    }, [navigation, meal.title, mealIsFavoriteValue, mealID, favoriteIds])
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
        elevation: 4,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        //    IOS
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 8,
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
        elevation: 4,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        //    IOS
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 8,
        backgroundColor: 'white',
    },


})
export default MealDetailsScreen;