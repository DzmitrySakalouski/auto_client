import moment from 'moment';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

export const PageHeader = ({route}) => {
    const user = {
        name: 'Dmitry',
    };

    return (
        <View style={{paddingHorizontal: 16, marginTop: 30}}>
            <View style={styles.container}>
                <View style={styles.topSubHeader}>
                    <View style={styles.topSubHeaderTextContainer}>
                        <Text style={styles.text}>Привет, {user.name}</Text>
                        <Text style={styles.subtitleText}>
                            {moment().format('DD.MM.YYYY')}
                        </Text>
                    </View>
                    <Icon name="event" size={40} color="white" />
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menu}>
                <View style={[styles.menuItem, styles.menuItemSelected]}>
                    <Text
                        style={[
                            styles.menuItemText,
                            styles.menuItemTextSelected,
                        ]}>
                        Горячие предложения
                    </Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Автодетейлинг</Text>
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Химчистка мебели</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topSubHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    container: {
        paddingTop: 20,
        backgroundColor: '#d32e20',
        borderRadius: 9,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    text: {
        fontFamily: 'DaxlinePro-Regular',
        fontSize: 18,
        color: 'white',
    },
    subtitleText: {
        color: 'white',
        fontFamily: 'DaxlinePro-Regular',
    },
    topSubHeaderTextContainer: {
        justifyContent: 'space-between',
    },
    menuItem: {
        fontFamily: 'DaxlinePro-Regular',
        borderColor: '#d32e20',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginRight: 10,
    },
    menuItemSelected: {
        backgroundColor: '#d32e20',
    },
    menuItemText: {
        color: '#d32e20',
    },
    menuItemTextSelected: {
        color: 'white',
    },
    menu: {
        backgroundColor: 'white',
        marginTop: 30,
        marginBottom: 10,
    },
});
