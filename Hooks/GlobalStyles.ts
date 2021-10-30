import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const getStyles = () => {
	return StyleSheet.create({
		Card: {
			padding: '10px',
			backgroundColor: '#fff',
			borderRadius: '5px',
		},
		Background: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#1f2f3f'
		},
		Text: {
			color: '#fff'
		},
		TextArea: {
			height: '40px',
			backgroundColor: '#fff',
			marginBottom: '20px',
			padding: '8px',
			width: '100%',
		},
		ErrorMessage: {
			border: '3px solid red',
			borderRadius: '10px',
			padding: '5px',
			backgroundColor: 'white',
			marginBottom: '10px'
		}
	});
}

export default getStyles;