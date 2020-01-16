/**
 * 全局导航跳转工具类
 */
export default class NavigationUtil {
    /**
     * 跳转指定页面
     * @param params 要传递的参数
     * @param page 将要跳转的页面
     */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('navigation can not be null');
            return;
        }
        navigation.navigate(page, {...params});
    }

    /**
     * 返回上一页
     * @param params
     */
    static goBack(params) {
        const {navigation} = params;
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('MainNavigator');
    }
}
