import React from 'react'
import {ScrollView, Text} from 'react-native'

export default function ViewAssessmentResults({navigation}) {
	const quiz = navigation.getParam('quiz')
	const scores = navigation.getParam('scores')

	const total = scores.sum()

	return (
		<ScrollView>
			<Text>Your Score was {total}!</Text>
		</ScrollView>
	)
}
