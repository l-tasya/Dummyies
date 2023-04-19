import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MealItem from "./MealItem";
import Colors from "../../utils/Colors";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {IMeal} from "../../data/dummy-data";
import {RootStackParamList} from "../../App";

interface IProps {
    items: IMeal[]
}
const MealsList: React.FC<IProps> = ({items}) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'MealsDetails'>>()
    function renderMealItem(item: IMeal) {

        //пропускаю функцию которая будет перебрасывать на MealsDetails
        const onPress = () =>{
            navigation.navigate("MealsDetails", {meal: item})
        }

        //Пропускаю item внутрь так как FlatList возвращает itemData в который является оберткой контента
        return <MealItem item={item} onPress={onPress}/>
    }
    return <LinearGradient
        colors={[Colors.primary800, Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]}
        style={styles.container}>
        <View style={styles.container}>
            <FlatList data={items}
                      keyExtractor={item => item.id}
                      renderItem={(itemData:ListRenderItemInfo<IMeal>) => renderMealItem(itemData.item)}
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