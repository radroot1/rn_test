import {
    Image,
    ImageBackground,
    PixelRatio,
    Platform,
    ScrollView,
    StyleSheet,
    Text as TextDefault,
    TouchableOpacity, TouchableWithoutFeedback, Alert,
    View
} from 'react-native';
import React from 'react';
import * as c from "AwesomeProject/app/constants/index";
import g_style from "AwesomeProject/app/style";
import {
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
    DrawerActions, StackActions
} from 'react-navigation';

import HomePage from 'AwesomeProject/app/modules/home/view';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({
            HomePage,
        }),
        navigationOptions: {
            tabBarLabel: "Test0",
            tabBarIcon: ({focused}) => (
                <Image source={focused ? c.images.MENU_HOME_ACTIVE : c.images.MENU_HOME} style={g_style.menuIcons}/>
            ),
        }
    },
    Home2: {
        screen: createStackNavigator({
            HomePage
        }),
        navigationOptions: {
            tabBarLabel: "Test1",
            tabBarIcon: ({focused}) => (
                <Image source={focused ? c.images.MENU_DOCTOR_ACTIVE : c.images.MENU_DOCTOR}
                       style={g_style.menuIcons}/>
            ),
        }
    },
    Home3: {
        screen: createStackNavigator({
            HomePage
        }),
        navigationOptions: {
            tabBarLabel: "Test2",
            tabBarIcon: ({focused}) => (
                <Image source={focused ? c.images.MENU_CATALOGUE_ACTIVE : c.images.MENU_CATALOGUE}
                       style={g_style.menuIcons}/>
            )
        }
    },
    Home4: {
        screen: createStackNavigator({
            HomePage
        }),
        navigationOptions: {
            tabBarLabel: "Test3",
            tabBarIcon: ({focused}) => (
                <Image source={focused ? c.images.MENU_SALON_ACTIVE : c.images.MENU_SALON} style={g_style.menuIcons}/>
            )
        }
    },
    Home5: {
        screen: createStackNavigator({
            HomePage
        }),
        navigationOptions: {
            tabBarLabel: "Test4",
            tabBarIcon: ({focused}) => (
                <Image source={focused ? c.images.MENU_PROFILE_ACTIVE : c.images.MENU_PROFILE}
                       style={g_style.menuIcons}/>
            )
        }
    },
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,

    tabBarOptions: {
        allowFontScaling: false,
        inactiveTintColor: "#707070",
        upperCaseLabel: false,
        indicatorStyle: {height: 0},
        tabStyle: [{
            flex: 1,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }, (Platform.OS === 'android') ? {
            opacity: 1
        } : {}],
        style: {
            backgroundColor: "white",
            borderTopColor: "rgba(0, 0, 0, .5)",
            borderTopWidth: 0.5,
        },
        labelStyle: {
            marginBottom: Platform.isPad ? 0 : 7,
            fontSize: 10,
        },
        pressColor: (Platform.OS === 'android') ? "#3593ff" : null,
        showIcon: true,
    }
});

TabNavigator.navigationOptions = {
    header: null
};


export default TabNavigator;
