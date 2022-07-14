// import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import Login from './components/auth/Login';
import Landing from './components/auth/Landing';
import BuyerSeller from './components/auth/BuyerSeller';
import BuyerRegister from './components/auth/BuyerRegister';
import SellerRegister from './components/auth/SellerRegister';
import ShopDetail from './screens/ShopDetail';
import BuyerHome from './screens/BuyerHome';
import OrderCompleted from './screens/OrderCompleted';
import configureStore from './redux/store';
import SellerHome from './screens/SellerHome'


const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    //auth screens
    // if (!loggedIn) {
    //     return (
    //         <NavigationContainer>
    //             <Stack.Navigator initialRouteName="Landing">
    //                 <Stack.Screen name="Landing" component={Landing} />
    //                 <Stack.Screen name="LogIn" component={LogIn} />
    //                 <Stack.Screen name="BuyerSeller" component={BuyerSeller} />
    //                 <Stack.Screen name="BuyerRegister" component={BuyerRegister} />
    //                 <Stack.Screen name="SellerRegister" component={SellerRegister} />
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );
    // }

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SellerHome" screenOptions={screenOptions}>
                {/* <Stack.Navigator initialRouteName="Landing" screenOptions={screenOptions}> */}
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="BuyerSeller" component={BuyerSeller} />
                    <Stack.Screen name="BuyerRegister" component={BuyerRegister} />
                    <Stack.Screen name="SellerRegister" component={SellerRegister} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SellerHome" component={SellerHome} />
                    <Stack.Screen name="BuyerHome" component={BuyerHome} />
                    <Stack.Screen name="ShopDetail" component={ShopDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}