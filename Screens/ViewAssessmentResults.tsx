import React from 'react'
import {Button, ScrollView, Text} from 'react-native'

export default function ViewAssessmentResults({route, navigation}) {
	const {quiz, scores} = route.params

	let total = 0;

	scores.forEach((score: number) => {total += score});

	return (
		<ScrollView>
			<Text>Your Score for {quiz.title} was {total}!</Text>
			<Button onPress={() => {navigation.navigate('ViewAssessments')}} title='Take Another Assessment' />
		</ScrollView>
	)
}
