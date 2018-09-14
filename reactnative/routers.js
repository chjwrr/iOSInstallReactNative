
import React from 'react';

import {
   createStackNavigator
} from 'react-navigation';

import Home from './home';
const StackRouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: '首页'
        }
    }

};
const StackNavigatorConfigs = {
    initialRouteName: 'Home', // 初始化哪个界面为根界面
    mode: 'card', // 跳转方式：默认的card，在iOS上是从右到左跳转，在Android上是从下到上，都是使用原生系统的默认跳转方式。
    headerMode: 'screen', // 导航条动画效果：float表示会渐变，类似于iOS的原生效果，screen表示没有渐变。none表示隐藏导航条
    gesturesEnabled: false,
    navigationOptions: {
        cardStack: {
            gesturesEnabled: false, //是否可以使用手势关闭此屏幕。在iOS上默认为true，在Android上为false
        },
    },
};

const AppNavigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);


export default AppNavigator;
