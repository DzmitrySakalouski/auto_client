/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigator} from './src/navigation';
import {StatusBar} from 'react-native';

const App = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <AppNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
);

export default App;
