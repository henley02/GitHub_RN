import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import PopularPage from './../page/PopularPage';
import FavoritePage from './../page/FavoritePage';
import TrendingPage from './../page/TrendingPage';
import MyPage from './../page/MyPage';

// 底部路由
const TABS_NAVIGATOR = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: ({navigation}) => ({
            title: '最热',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name='whatshot' size={24} color={tintColor}/>
            )
        })
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: ({navigation}) => ({
            title: '趋势',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name='md-trending-up' size={24} color={tintColor}/>
            )
        })
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: ({navigation}) => ({
            title: '收藏',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name='favorite' size={24} color={tintColor}/>
            )
        })
    },

    MyPage: {
        screen: MyPage,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({tintColor}) => (
                <Entypo name='user' size={24} color={tintColor}/>
            )
        })
    }
};
export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
    }

    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs;
        }
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS_NAVIGATOR;
        // 根据需要显示需要的tab
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
        return (
            this.Tabs = createAppContainer(
                createBottomTabNavigator(tabs, {
                    tabBarComponent: props => (
                        <TabBarComponent theme={this.props.theme} {...props}/>
                    )
                })
            )
        );
    }

    render() {
        const Tab = this._tabNavigator();
        return (
            <Tab/>
        );
    }
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        };
    }

    render() {
        const {routes, index} = this.props.navigation.state;
        console.log(routes);
        if (routes[index].params) {
            const {theme} = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.theme.tintColor|| this.props.activeTintColor}
            />
        );
    }
}
