import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StockNavigator} from '.';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="StockNavigator"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="StockNavigator" component={StockNavigator} />
            <Stack.Screen name="CalendarNavigator" component={() => null} />
            <Stack.Screen name="CleaningDashboard" component={() => null} />
            <Stack.Screen name="Account" component={() => null} />
        </Stack.Navigator>
    );
};
