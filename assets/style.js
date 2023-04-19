import {Platform} from "react-native";


const shadowStyles = {
    elevation: 4,
    overflow: Platform.OS === 'android'? "hidden":"visible",
    //    IOS
    shadowColor: 'black',
    shadowOpacity: {width: 0, height:2},
    shadowRadius: 8,
}


export {
    shadowStyles
}