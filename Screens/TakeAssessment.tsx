import React, {useState} from 'react'
import {ScrollView, Text, View, Button} from 'react-native';

type Quiz = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
	answerLegend: string[],
}

export default function TakeAssessment({route, navigation}) {
	const quiz = route.params.quiz;

	const zeros: number[] = []
	quiz.questions.forEach((question: string) => {zeros.push(0)})

	const scoreOptions: number[] = []
	for (let i = quiz.minPerQuestion; i <= quiz.maxPerQuestion; i++) {
		scoreOptions.push(i)
	}

	const [scores, setScores] = useState<number[]>(zeros);

	const updateScore = (index: number, newScore: number) => {
		let newScores = [...scores];
		newScores.splice(index, 1, newScore);
		setScores(newScores);
	}

	return (
		<View style={{backgroundColor: '#1f2f3f', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
		<View style={{width: '100%', backgroundColor: 'white', padding: 20, margin: 5}}>
			<Text>Please answer each question according to how it best matches the following key: </Text>
			{quiz.answerLegend.map((answerKey: string, i: number) => {
				return <Text>{i + quiz.minPerQuestion}: {answerKey}</Text>
			})}
			<Button 
				onPress={() => {
					navigation.goBack();
				}}
				title='back'
			/>
		</View>
		<ScrollView>
			{quiz.questions.map((question: string, i: number) => {
				return <View style={{width: '80%', margin: 10, backgroundColor: 'white', padding: 20}}>
					<Text style={{fontSize: 18}}>{question}</Text>
					<Text style={{fontSize: 12}}>Answer: {scores[i]}</Text>
					<View style={{display: 'flex', flexDirection: 'row'}}>
						{scoreOptions.map((option) => {
							return <Button 
								onPress={() => {
									updateScore(i, option);
								}}
								title={option.toString()}
							/>
						})}
					</View>
				</View>
			})}
			<Button 
				onPress={() => {
					navigation.navigate('ViewAssessmentResuts', {scores: scores, quiz: quiz});
				}}
				title='Complete Assessment'
			/>
		</ScrollView>
		</View>
	)
}
