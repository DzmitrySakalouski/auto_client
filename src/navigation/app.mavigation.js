import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StockDashBooardScreen} from '../ui/screens/StockDashBoard/StockDashBoardScreen';
import {StockDetailsScreen} from '../ui/screens/StockDetails/StockDetailsScreem';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="StockDashBooardScreen"
                component={StockDashBooardScreen}
                options={{cardStyle: {backgroundColor: 'white'}}}
            />
            <Stack.Screen
                name="StockDetailsScreen"
                component={StockDetailsScreen}
            />
        </Stack.Navigator>
    );
};
