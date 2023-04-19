import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../utils/Colors";

//все компоненты которые были положены в Screen компоненту получают {navigation} параметр
const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = useCallback((itemData) => {
        const onPressHandler = function () {
            //ложим дополнительные данные в navigation метод(чтобы отфильтровать потом по id)
            navigation.navigate('MealsOverview', {
                categoryID: itemData.item.id
            })
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>
    }, [])
    return (<LinearGradient
            colors={[Colors.primary900,Colors.primary800, Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]}
            style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={(item) => renderCategoryItem(item)}
                numColumns={2}
                style={styles.container}
            />
    </LinearGradient>

    );
};
const styles = StyleSheet.create({container: {flex: 1}})
export default CategoriesScreen;