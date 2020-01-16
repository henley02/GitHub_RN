import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class DetailPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DetailScreen1</Text>
                <Button title='Go to Detail again' onPress={() => this.props.navigation.push('Detail')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
