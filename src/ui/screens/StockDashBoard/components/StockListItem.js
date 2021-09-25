import React, {useMemo} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

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
        <Pressable key={stockItem.id} onPress={onStockPress}>
            <ImageBackground
                source={stockItem.image}
                style={[
                    styles.cardContainer,
                    {width: cardWidth, height: cardHeight},
                ]}>
                <View style={styles.shadowContainer}>
                    <Text style={styles.textName}>{stockItem.name}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: radius,
        overflow: 'hidden',
        marginBottom: margin,
        marginRight: margin,
        flex: 1,
    },
    textName: {
        fontFamily: 'DaxlinePro-Regular',
        color: 'white',
        fontWeight: 'bold',
    },
    shadowContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: '#d32e20',
        opacity: 0.8,
        paddingRight: 10,
    },
});
