import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

export const StockDetailsScreen = ({route}) => {
    const {width, height} = useSafeAreaFrame();
    const {stock} = route.params;
    if (!stock) {
        return <Text h1>Ooops...</Text>;
    }

    console.log('Details', stock.id);

    return (
        <SharedElement id={stock.id}>
            <Image
                resizeMode="cover"
                source={stock.image}
                style={{width, height}}
            />
        </SharedElement>
    );
};

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: '#d32e20',
        opacity: 0.8,
        width: '100%',
        height: '100%',
    },
});
