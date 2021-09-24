import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StockDashBooardScreen} from '../ui/screens/StockDashBoard/StockDashBoardScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="StockDashBooardScreen"
                component={StockDashBooardScreen}
                options={{cardStyle: {backgroundColor: 'white'}}}
            />
        </Stack.Navigator>
    );
};
