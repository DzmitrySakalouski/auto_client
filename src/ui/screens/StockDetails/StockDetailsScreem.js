import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {PanGestureHandler, ScrollView} from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

const {height} = Dimensions.get('window');

export const StockDetailsScreen = ({navigation, route}) => {
    const {stock} = route.params;

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const goBack = () => {
        navigation.goBack();
    };

    const onGestureEvent = useAnimatedGestureHandler({
        onActive: ({translationX, translationY}) => {
            translateX.value = translationX;
            translateY.value = translationY;
        },
        onEnd: ({velocityX, velocityY}) => {
            const shouldGoBack =
                snapPoint(translateY.value, velocityY, [0, height]) === height;
            if (shouldGoBack) {
                runOnJS(goBack)();
            } else {
                translateX.value = withSpring(0, {velocity: velocityX});
                translateY.value = withSpring(0, {velocity: velocityY});
            }
        },
    });

    const moveStyle = useAnimatedStyle(() => ({
        flex: 1,
        transform: [
            {translateX: translateX.value},
            {translateY: translateY.value},
        ],
    }));

    if (!stock) {
        return <Text h1>Ooops...</Text>;
    }

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={moveStyle}>
                <SharedElement id={stock.id}>
                    <ImageBackground
                        resizeMode="cover"
                        source={stock.image}
                        style={styles.image}>
                        <View style={styles.shadowContainer} />
                    </ImageBackground>
                </SharedElement>
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: '#d32e20',
        opacity: 0.8,
        width: '100%',
        height: '100%',
    },
    image: {width: '100%', height: '100%'},
    textName: {
        fontFamily: 'DaxlinePro-Regular',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'absolute',
    },
    shadowContainer: {
        // flex: 1,
        justifyContent: 'flex-end',
        // paddingLeft: 10,
        paddingBottom: 5,
        // backgroundColor: '#d32e20',
        opacity: 0.8,
        // paddingRight: 10,
    },
});
