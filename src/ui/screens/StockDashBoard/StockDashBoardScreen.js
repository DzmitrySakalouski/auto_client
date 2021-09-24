import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

export const StockDashBooardScreen = props => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../../../assets/logo.jpeg')}
            />
            <Text style={styles.headerText}>Комбо</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 80,
        marginTop: 30,
        marginBottom: 40,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    headerText: {
        fontFamily: 'Daxline',
    },
});
