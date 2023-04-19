import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import MealDetails from "../MealDetails";
import React from "react";
import {IMeal} from "../../data/dummy-data";

interface IProps {
    item: IMeal
    onPress: () => void
}

const MealItem: React.FC<IProps> = ({item, onPress}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({pressed}) => [pressed && styles.buttonPressed]}
                       onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: item.imageUrl}}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <MealDetails duration={item.duration} affordability={item.affordability}
                                 complexity={item.complexity}/>
                    <View>

                    </View>
                </View>
            </Pressable>
        </View>
    );
};
export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 16,
        backgroundColor: 'white',
        elevation: 4,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        //    IOS
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.5,
    },
})