import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({})

export const container = StyleSheet.create({
	full: {
		paddingTop: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16
	}
})

export const headers = StyleSheet.create({
	large: {
		fontSize: 28,
		fontWeight: 'bold'
	},

	medium: {
		color: colors.dark,
		marginTop: 16,
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export const stackHeaderStyle = StyleSheet.create({
	app: {
		height: 90,
		backgroundColor: colors.baseColor
	}
});

export default styles;