import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { stackHeaderStyle } from '../styles/generic';

import Overview from './Overview';
import Detail from './Detail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';

const Stack = createStackNavigator();

// TODO: make hamburger toggle button in header

const HomeStack = ({navigation}: any) => {
	const headerScreenOptions = {
		// style header of stack (colors)
		headerStyle: stackHeaderStyle.app,
		header: ({ scene }: any) => {
			const { options } = scene.descriptor;

			const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;

			return (
				<View style={{
					...stackHeaderStyle.app, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingTop: 36
				}}>
					{/* Niks links, later back button? */}

					<Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.light, marginLeft: 16 }}>
						{ title }
					</Text>

					{/* drawer (hamburger icon) */}
					<View>
						<TouchableOpacity style={{ paddingVertical: 16, paddingHorizontal: 16 }} onPress={() => { navigation.toggleDrawer() }}>
							<Text style={{ color: colors.light, fontSize: 24, fontWeight: 'bold' }}>☰</Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		},
		
	}


	return (
		<Stack.Navigator initialRouteName='Overview' screenOptions={ headerScreenOptions }>
			<Stack.Screen name='Lessons' component={Overview}/>
			<Stack.Screen name='Detail' component={Detail} />
		</Stack.Navigator>
	);
}

export default HomeStack;