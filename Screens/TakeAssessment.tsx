import React, {useState} from 'react'
import {ScrollView, Text, View, Button} from 'react-native';

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
}

export default function TakeAssessment({route, navigation}) {
	const quiz = route.params.quiz;

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
		<ScrollView style={{backgroundColor: '#1f2f3f'}}>
			<Button 
				onPress={() => {
					navigation.goBack();
				}}
				title='back'
			/>
			{quiz.questions.map((question: string, i: number) => {
				return <View style={{width: '80%', margin: 10, backgroundColor: 'white', padding: 20}}>
					<Text style={{fontSize: 18}}>{question}</Text>
					<Text style={{fontSize: 12}}>Answer: {scores[i]}</Text>
					{scoreOptions.map((option) => {
						return <Button 
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
					navigation.navigate('ViewAssessmentResuts', {scores: scores, quiz: quiz});
				}}
				title='Complete Assessment'
			/>
		</ScrollView>
	)
}
