import React, { useEffect } from 'react'
import {Button, ScrollView, Text} from 'react-native'
import setStorageData from '../Hooks/setStorageData'

export default function ViewAssessmentResults({route, navigation}) {
	const {quiz, scores} = route.params

	let total = 0;

	scores.forEach((score: number) => {total += score});

	useEffect(async () => {
		await setStorageData(quiz.title, total);
	}, []);

	return (
		<ScrollView>
			<Text>Your Score for {quiz.title} was {total}!</Text>
			<Button onPress={() => {navigation.navigate('ViewAssessments')}} title='Take Another Assessment' />
		</ScrollView>
	)
}
