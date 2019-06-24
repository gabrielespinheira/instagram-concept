import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
	createStackNavigator({
		Feed,
		New
	}, {
		defaultNavigationOptions: {
			headerTintColor: '#000',
			headerTitle: <Image source={logo} style={{ marginHorizontal: 20, marginTop: 7 }} />,
			headerBackTitle: null,
		},
		mode: 'modal',
	})
);
