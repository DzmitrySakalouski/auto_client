import React from 'react';
import {StockDashBooardScreen} from '../ui/screens/StockDashBoard/StockDashBoardScreen';
import {StockDetailsScreen} from '../ui/screens/StockDetails/StockDetailsScreem';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import 'react-native-gesture-handler';

const Stack = createSharedElementStackNavigator();

export const StockNavigator = () => {
    return (
        <Stack.Navigator
            mode="modal"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}>
            <Stack.Screen
                name="StockDashBooardScreen"
                component={StockDashBooardScreen}
                options={{cardStyle: {backgroundColor: 'white'}}}
            />
            <Stack.Screen
                name="StockDetailsScreen"
                component={StockDetailsScreen}
                options={{tabBarVisible: false}}
                sharedElements={route => {
                    const {id} = route.params.stock;
                    return [`image_background.${id}`];
                }}
            />
        </Stack.Navigator>
    );
};
