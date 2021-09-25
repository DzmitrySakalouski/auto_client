import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {StockListItem} from './StockListItem';

export const StockList = ({stockItems}) => {
    const {navigate} = useNavigation();
    if (!stockItems) {
        return null;
    }

    const onStockPress = () => navigate('StockDetailsScreen');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {stockItems.map(stock => (
                <StockListItem stockItem={stock} onStockPress={onStockPress} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 16,
        justifyContent: 'space-between',
    },
});
