import {Button, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Colors from "./utils/Colors";
import CategoriesScreen from "./features/Categories/CategoriesScreen";
import MealsOverviewScreen from "./features/Categories/MealsOverviewScreen";
import MealDetailsScreen from "./features/Categories/MealDetailsScreen";
import FavoritesScreen from "./features/Favorites/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {FavoritesContextProvider} from "./app/favorites-context";

const Stack = createNativeStackNavigator();

export default function App() {
    return (<>
            <StatusBar style={'light'}/>
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.primary800,
                        },
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: Colors.accent500}
                    }}>
                        <Stack.Screen
                            name={'MealsCategories'}
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}/>
                        <Stack.Screen
                            name={'MealsOverview'}
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name={'MealsDetails'}
                            component={MealDetailsScreen}
                            options={{
                                headerRight: () => {
                                    return <Button onPress title={'Tap Me'}/>
                                }
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
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
        contentStyle: {backgroundColor: Colors.accent500},
        drawerActiveBackgroundColor: Colors.primary700,
        drawerActiveTintColor: 'white',

    }}>
        <Drawer.Screen
            name={'Categories'}
            component={CategoriesScreen}
            options={{
                drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
            }}
        />
        <Drawer.Screen
            name={'Favorites'}
            component={FavoritesScreen}
            options={{
                drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
            }}
        />
    </Drawer.Navigator>
}