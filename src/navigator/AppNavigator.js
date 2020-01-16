import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomePage from './../page/WelcomePage';
import HomePage from './../page/HomePage';
import DetailPage from './../page/DetailPage';

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            headerShown: false
        }
    }
});
const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false
        }
    },
    DetailPage: {
        screen: DetailPage
    }
});

export default createAppContainer(
    createSwitchNavigator({
            InitNavigator: InitNavigator,
            MainNavigator: MainNavigator
        }, {
            navigationOptions: {},
            initialRouteName: 'InitNavigator'
        }
    )
);
