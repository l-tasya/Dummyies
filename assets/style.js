import {Platform} from "react-native";


const shadowStyles = {
    elevation: 4,
    overflow: Platform.OS === 'android'? "hidden":"visible",
    //    IOS
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 8,
}


export {
    shadowStyles
}