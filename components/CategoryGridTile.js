import {Pressable, StyleSheet, Text, View} from 'react-native';
import {shadowStyles} from "../assets/style";
import Colors from "../utils/Colors";

const CategoryGridTile = ({title, color, onPress}) => {
    return (<View style={[styles.gridItem]}>
            <Pressable android_ripple={{color: "#cbbcbc"}}
                //ios ripple
                       style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
                       onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: Colors.primary800}]}>
                    <Text style={[styles.title,  {color: color}]}>{title}</Text>
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
        ...shadowStyles,
        backgroundColor: 'white',

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