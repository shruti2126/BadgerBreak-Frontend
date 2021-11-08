import React, { useEffect } from 'react'
import {Button, View, Text} from 'react-native'
import getStorageData from '../Hooks/getStorageData';
import setStorageData from '../Hooks/setStorageData';

type quizScoreType = {title: string, score: number}

export default function ViewAssessmentResults({route, navigation}) {
	const {quiz, scores} = route.params

	const total = scores.reduce((sum:number, score:number) => sum += score);

	useEffect(() => {
		updateQuizes();
	}, []);

	const updateQuizes = async () => {
		let quizes = await getStorageData('quizes');
		quizes = quizes !== null? quizes : []
		const total = scores.reduce((sum:number, score:number) => sum += score);
		var newQuizScores = [...quizes];
		const i = newQuizScores.findIndex((score: quizScoreType) => score.title === quiz.title)
		if (i === -1) {
			newQuizScores.push({title: quiz.title, score: total})
		}
		else {
			newQuizScores[i].score = total;
		}
		await setStorageData('quizes', newQuizScores);
	}

	return (
		<View style={{flex: 1, backgroundColor: '#1f2f3f', justifyContent: 'flex-start', alignItems: 'center', padding: 15}}>
			<Text>Your Score for {quiz.title} was {total}!</Text>
			<Button onPress={() => {navigation.navigate('ViewAssessments')}} title='Take Another Assessment' />
		</View>
	)
}
