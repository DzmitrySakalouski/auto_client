import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {PanGestureHandler} from 'react-native-gesture-handler';
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

const margin = 16;

export const StockDetailsScreen = ({navigation, route}) => {
    const {stock} = route.params;

    const {height, width} = useSafeAreaFrame();

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

    const textWidth = useMemo(() => {
        return (width - margin * 3) / 2;
    }, [width]);

    if (!stock) {
        return <Text h1>Ooops...</Text>;
    }

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={moveStyle}>
                <SharedElement id={`image_background.${stock.id}`}>
                    <Image
                        resizeMode="cover"
                        source={stock.image}
                        style={styles.image}
                    />
                </SharedElement>
                {/* <View>
                    <Text style={[styles.titleText, {width: textWidth}]}>
                        {stock.name}
                    </Text>
                </View> */}
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
    image: {width: '100%', height: '100%', opacity: 1},
    textName: {
        fontFamily: 'DaxlinePro-Regular',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'absolute',
    },
    titleText: {
        position: 'absolute',
        zIndex: 2,
        width: '35%',
        bottom: 25,
        left: 5,
        fontFamily: 'DaxlinePro-Regular',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
