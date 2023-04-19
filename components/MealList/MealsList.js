import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MealItem from "./MealItem";
import Colors from "../../utils/Colors";
import {useNavigation} from "@react-navigation/native";

const MealsList = ({items}) => {
    const navigation = useNavigation()
    function renderMealItem(itemData) {

        //пропускаю функцию которая будет перебрасывать на MealsDetails
        const onPress = () =>{
            navigation.navigate('MealsDetails', {meal: itemData.item}
            )
        }

        //Пропускаю item внутрь так как FlatList возвращает itemData в который является оберткой контента
        return <MealItem item={itemData.item} onPress={onPress}/>
    }
    return <LinearGradient
        colors={[Colors.primary800, Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]}
        style={styles.container}>
        <View style={styles.container}>
            <FlatList data={items}
                      keyExtractor={item => item.id}
                      renderItem={(itemData) => renderMealItem(itemData)}
            />
        </View>
        </LinearGradient>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    }
})
export default MealsList;