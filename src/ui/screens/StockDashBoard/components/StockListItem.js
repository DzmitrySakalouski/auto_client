import {useFocusEffect} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

const margin = 16;
const radius = 5;

export const StockListItem = ({stockItem, onStockPress}) => {
    const {width} = useSafeAreaFrame();

    const imgOpacity = useSharedValue(0.3);
    const textContainerTranslation = useSharedValue(0);

    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            width: '100%',
            height: '100%',
            opacity: imgOpacity.value,
        };
    });

    const handleStockPress = () => {
        imgOpacity.value = withSpring(1);
        textContainerTranslation.value = withSpring(-200);
        onStockPress();
    };

    useFocusEffect(() => {
        imgOpacity.value = withTiming(0.3, {duration: 1000});
        textContainerTranslation.value = withTiming(0, {duration: 1000});
    });

    const cardWidth = useMemo(() => {
        return (width - margin * 3) / 2;
    }, [width]);

    const cardHeight = useMemo(() => {
        return cardWidth * 1.77;
    }, [cardWidth]);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={handleStockPress}
                style={[
                    {width: cardWidth, height: cardHeight},
                    styles.cardContainer,
                ]}>
                <SharedElement id={`image_background.${stockItem.id}`}>
                    <Animated.Image
                        source={stockItem.image}
                        style={animatedImageStyle}
                    />
                </SharedElement>
                <View style={[styles.titleContainer, {width: cardWidth}]}>
                    {stockItem.name.map((stockName, index) => (
                        <>
                            <Text style={styles.titleText} key={stockName}>
                                {stockName}
                            </Text>
                            {index === 0 && (
                                <Text
                                    style={[styles.titleText, {fontSize: 30}]}
                                    key={`${stockName}+`}>
                                    +
                                </Text>
                            )}
                        </>
                    ))}
                </View>
            </Pressable>
        </View>
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
    titleText: {
        fontFamily: 'DaxlinePro-Regular',
        fontWeight: '900',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    titleContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    container: {
        position: 'relative',
        zIndex: 2,
        shadowColor: '#d32e20',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1.41,

        elevation: 2,
    },
});
