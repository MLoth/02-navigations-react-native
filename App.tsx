import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './screens/HomeStack';
import Settings from './screens/Settings';
import colors from './styles/colors';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerPosition='left' drawerContentOptions={{ activeTintColor: colors.baseColor }}>
				<Drawer.Screen name="HomeStack" component={HomeStack} />
				<Drawer.Screen name="Settings" component={Settings} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}