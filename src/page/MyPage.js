import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

export default class MyPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>MyPage</Text>
                <Button title='Change Green' onPress={() => {
                    navigation.setParams({
                        theme: {
                            tintColor: 'green',
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
