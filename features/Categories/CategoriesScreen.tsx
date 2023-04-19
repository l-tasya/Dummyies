import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../utils/Colors";
import {ICategory} from "../../data/models/category";
import {RootStackParamList} from "../../App";
import {NavigationProp, useNavigation} from "@react-navigation/native";

//все компоненты которые были положены в Screen компоненту получают {navigation} параметр
const CategoriesScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'MealsOverview'>>()
    const renderCategoryItem = useCallback((item: ICategory) => {
        const onPressHandler = function () {
            //ложим дополнительные данные в navigation метод(чтобы отфильтровать потом по id)
            navigation.navigate("MealsOverview", {
                categoryID: item.id
            })
        }
        return <CategoryGridTile title={item.title} color={item.color} onPress={onPressHandler}/>
    }, [])
    return (<LinearGradient
            colors={[Colors.primary900, Colors.primary800, Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]}
            style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={(itemData: ListRenderItemInfo<ICategory>) => renderCategoryItem(itemData.item)}
                numColumns={2}
                style={styles.container}
            />
        </LinearGradient>

    );
};
const styles = StyleSheet.create({container: {flex: 1}})
export default CategoriesScreen;