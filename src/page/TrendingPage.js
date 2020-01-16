import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';

/**
 * 趋势
 */
export default class TrendingPage extends Component {
    render() {
        const {navigation} = this.props;
        console.log(navigation);
        return (
            <View style={styles.container}>
                <Text>TrendingPage</Text>
                <Button title='Change Theme' onPress={() => {
                    console.log(2);
                    navigation.setParams({
                        theme: {
                            tintColor: 'red',
                            updateTime: new Date().getTime()
                        }
                    });
                }}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
