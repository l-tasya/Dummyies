import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Colors from "./utils/Colors";
import CategoriesScreen from "./features/Categories/CategoriesScreen";
import MealsOverviewScreen from "./features/Categories/MealsOverviewScreen";
import MealDetailsScreen from "./features/Categories/MealDetailsScreen";
import FavoritesScreen from "./features/Favorites/FavortiesScreen/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";
import {store} from "./app/store";
import React from "react";
import {IMeal} from "./data/dummy-data";


export type RootStackParamList = {
    MealsCategories: undefined
    MealsOverview: { categoryID: string }
    MealsDetails: { meal: IMeal }
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (<>
            <StatusBar barStyle={'light-content'}/>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.primary800,
                        },
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: Colors.accent500}
                    }}>
                        <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
                            headerShown: false,
                        }}/>
                        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
                        <Stack.Screen name="MealsDetails" component={MealDetailsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>

    );
}
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primary800,
        },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: Colors.primary700,
        drawerActiveTintColor: 'white',

    }}>
        <Drawer.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
                drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
            }}
        />
        <Drawer.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
                drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
            }}
        />
    </Drawer.Navigator>
}


export default App;