import {CATEGORIES, MEALS} from "../../data/dummy-data";
import React, {useLayoutEffect} from "react";
import MealsList from "../../components/MealList/MealsList";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const MealsOverviewScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, 'MealsOverview'>>()
    //получаем дополнительные данные из метода navigation
    const catID = route.params.categoryID
    //фильтруем по ID
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })
    //присваиваем title к options который в Apps
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(t => t.id === catID)?.title
        navigation.setOptions({title: categoryTitle})
    }, [catID, navigation])

    return <MealsList items={displayedMeals}/>
};


export default MealsOverviewScreen;