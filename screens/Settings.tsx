import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

import { container, headers } from '../styles/generic';

// TODO: pick color for design of app

const Settings = ({navigation}: any) => {
	return (
		<SafeAreaView style={container.full}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Text style={headers.large}>Settings</Text>

				{/* Place inside view */}
				<TouchableOpacity style={{ paddingVertical: 0, paddingHorizontal: 16 }} onPress={() => { navigation.toggleDrawer() }}>
					<Text style={{ color: colors.dark, fontSize: 24, fontWeight: 'bold' }}>☰</Text>
				</TouchableOpacity>
			</View>

			<Text>Bottom</Text>
		</SafeAreaView>
	);
}

export default Settings;