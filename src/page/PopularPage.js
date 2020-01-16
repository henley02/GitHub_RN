import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DetailPage from './DetailPage';
import NavigationUtil from './../navigator/NavigationUtil';

/**
 * 最热
 */
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP'];
    }

    _getTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab  {...props} tableLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            };
        });
        return tabs;
    }

    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                this._getTabs(),
                {
                    tabBarOptions: {
                        tabStyle: styles.tabStyle,
                        upperCaseLabel: false,
                        scrollEnabled: true,
                        style: {
                            backgroundColor: '#678'
                        },
                        indicatorStyle: styles.indicatorStyle,
                        labelStyle: styles.labelStyle
                    }
                }
            )
        );
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <TabNavigator/>
            </SafeAreaView>
        );
    }
}

class PopularTab extends Component {
    render() {
        const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
                <Text
                    onPress={() => {
                        NavigationUtil.goPage({navigation: this.props.navigation}, 'DetailPage');
                    }}>
                    跳转到详情页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: '#FFF'

    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
    }
});
