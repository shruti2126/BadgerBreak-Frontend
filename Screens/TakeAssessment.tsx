import React, {useState} from 'react'
import {ScrollView, Text, View, Button} from 'react-native';
//import Slider from '@react-native-community/slider';

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
}

export default function TakeAssessment({navigation}) {
	const quiz = navigation.getParam('quiz');

	const zeros: number[] = []
	quiz.questions.forEach((question: string) => {zeros.push(0)})

	const scoreOptions: number[] = []
	for (let i = quiz.minPerQuestion; i < quiz.maxPerQuestion; i++) {
		scoreOptions.push(i)
	}

	const [scores, setScores] = useState<number[]>(zeros);

	const updateScore = (index: number, newScore: number) => {
		let newScores = [...scores];
		newScores.splice(index, 1, newScore);
		setScores(newScores);
	}

	return (
		<ScrollView>
			{quiz.questions.map((question: string, i: number) => {
				<View style={{width: '100%', margin: 10, backgroundColor: 'white'}}>
					<Text style={{fontSize: 18}}>{question}</Text>
					<Text style={{fontSize: 12}}>Answer: {scores[i]}</Text>
					{scoreOptions.map((option) => {
						<Button 
							onPress={() => {
								updateScore(i, option);
							}}
							title={option}
						/>
					})}
				</View>
			})}
			<Button 
				onPress={() => {
					navigation.navigate('ViewAssessmentResults', {scores: scores, quiz: quiz});
				}}
				title='Complete Assessment'
			/>
		</ScrollView>
	)
}
