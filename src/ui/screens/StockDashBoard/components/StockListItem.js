import React, {useMemo} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

const margin = 16;
const radius = 5;

export const StockListItem = ({stockItem, onStockPress}) => {
    const {width} = useSafeAreaFrame();

    const cardWidth = useMemo(() => {
        return (width - margin * 3) / 2;
    }, [width]);

    const cardHeight = useMemo(() => {
        return cardWidth * 1.77;
    }, [cardWidth]);

    return (
        <SharedElement id={stockItem.id}>
            <Pressable
                onPress={onStockPress}
                style={[
                    {width: cardWidth, height: cardHeight},
                    styles.cardContainer,
                ]}>
                <ImageBackground source={stockItem.image} style={styles.image}>
                    <View style={styles.shadowContainer} />
                </ImageBackground>
            </Pressable>
        </SharedElement>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: radius,
        overflow: 'hidden',
        marginBottom: margin,
        marginRight: margin,
        flex: 1,
        position: 'relative',
    },
    textName: {
        fontFamily: 'DaxlinePro-Regular',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    shadowContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 5,
        // backgroundColor: '#d32e20',
        opacity: 0.8,
        paddingRight: 10,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
