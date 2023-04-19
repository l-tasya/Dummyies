import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import React from "react";

interface IProps {
    icon: any
    color: string
    onPress: ()=>void
}


const IconButton: React.FC<IProps> = ({icon,color,onPress}) => {
    const clickHandler = () =>{
        onPress()
    }
    return (
        <Pressable onPress={clickHandler} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    pressed:{
        opacity: 0.5
    }
})
export default IconButton;