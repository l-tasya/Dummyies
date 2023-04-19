import {CATEGORIES, MEALS} from "../../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../../components/MealList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
    //получаем дополнительные данные из метода navigation
    const catID = route.params.categoryID
    //фильтруем по ID
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })
    //присваиваем title к options который в Apps
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(t => t.id === catID).title
        navigation.setOptions({title: categoryTitle})
    }, [catID, navigation])

    return <MealsList items={displayedMeals}/>
};


export default MealsOverviewScreen;