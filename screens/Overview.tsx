import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import lessons from '../data/lessons';
import colors from '../styles/colors';
import { container, headers } from '../styles/generic';

const Overview = ({ navigation }: any ) => {
	return (
		<View style={container.full}>
			<Text style={headers.large}>
				Lessons
			</Text>

			<FlatList
				data={lessons}
				renderItem={({ item }: any) => (
					<TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
						<Text style={headers.medium}>{item.title}</Text>
						<Text style={{ color: colors.baseColor}}>{'★'.repeat(item.rating)}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item: any) => `${item.id}`} />

		</View>
	)
}

export default Overview;