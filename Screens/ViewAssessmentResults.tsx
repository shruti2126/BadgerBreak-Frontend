import React, { useEffect } from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import getStorageData from '../Hooks/getStorageData';
import setStorageData from '../Hooks/setStorageData';
import getStyles from '../Styling/Styling';

type quizScoreType = {title: string, score: number}

const styles = getStyles();

export default function ViewAssessmentResults({route, navigation}) {
	const {quiz, scores} = route.params


	let total: number = scores.reduce((total, score) => total += score)

	useEffect(() => {
		updateQuizes();
	}, []);

	const updateQuizes = async () => {
		const user = await getStorageData('user');
		let quizes = await getStorageData(user.email + ':quizes');
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
		await setStorageData(user.email + ':quizes', newQuizScores);
	}

	return (
		<View style={[styles.container, {justifyContent: 'flex-start'}]}>
			<Text style={styles.card}>Your Score for {quiz.title} was {total}!</Text>
			<Text style={styles.card}>Take another assessment or go back to the home screen to see all your assessment results{quiz.title} was {total}!</Text>
			<Text style={styles.card}>We are currently in contact with Dr. Ritu to improve our quiz scoring as the algorithm to score them varies from assessment to assessment. More Assessments and meaningful scoring coming in Iteration 3</Text>
			<TouchableOpacity 
				style={[styles.card, {backgroundColor: 'steelblue'}]}
				onPress={() => navigation.popToTop()}
			>
				<Text style={{fontSize: 16, color: 'white'}}>Take Another Assessment</Text>
			</TouchableOpacity>
		</View>
	)
}
