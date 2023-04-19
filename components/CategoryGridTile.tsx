import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from "../utils/Colors";
import React from "react";

interface IProps {
    title: string
    color: string
    onPress: () => void
}

const CategoryGridTile: React.FC<IProps> = ({title, color, onPress}) => {
    return (<View style={[styles.gridItem]}>
            <Pressable android_ripple={{color: "#cbbcbc"}}
                //ios ripple
                       style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
                       onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: Colors.primary800}]}>
                    <Text style={[styles.title, {color: color}]}>{title}</Text>
                </View>
            </Pressable>
        </View>

    );
};


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        //    IOS
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 8,
        backgroundColor: "white",

    },
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    }
})

export default CategoryGridTile;