import React from 'react';

import DynamicTabNavigator from './../navigator/DynamicTabNavigator';
import NavigationUtil from './../navigator/NavigationUtil';

export default class HomePage extends React.Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
            <DynamicTabNavigator/>
        );
    }
}
