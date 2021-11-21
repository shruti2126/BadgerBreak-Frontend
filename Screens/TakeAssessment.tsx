import React, {useState} from 'react'
import {ScrollView, Text, View, Button, TouchableHighlight} from 'react-native';
import {Slider} from 'react-native-elements';

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
	quiz.questions.forEach((question: string) => {zeros.push(quiz.minPerQuestion)})

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
		<ScrollView>
			<View style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 15}}>
				<View style={{width: '90%', backgroundColor: 'white', padding: 20, borderRadius: 10}}>
					<Text>Please answer each question according to how it best matches the following key: </Text>
					{quiz.answerLegend.map((answerKey: string, i: number) => {
						return <Text style={{fontWeight: 'bold', marginTop: 3}}>{i + quiz.minPerQuestion}: {answerKey}</Text>
					})}
					<View style={{display: 'flex', alignItems: 'center'}}>
						<TouchableHighlight
							onPress={() => navigation.goBack()}
							style={{backgroundColor: 'steelblue', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 8, height: 35, borderRadius: 10, width: 250}}
						>
							<Text style={{color: 'white', fontSize:14}}>Back</Text>
						</TouchableHighlight>
					</View>
				</View>
				{quiz.questions.map((question: string, i: number) => {
					return <View style={{width: '80%', margin: 10, backgroundColor: 'white', padding: 20, borderRadius: 10}} key={i}>
						<Text style={{fontSize: 18}}>{question}</Text>
						<Text style={{fontSize: 12, textAlign: 'center', marginTop: 5}}>Answer: {Math.trunc(scores[i])}</Text>
						<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
				<TouchableHighlight
					style={{backgroundColor: 'steelblue', width: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: 40, marginBottom: 20, marginTop: 10}}
					onPress={() => {
						navigation.navigate('ViewAssessmentResuts', {scores: scores, quiz: quiz});
					}}
				>
					<Text style={{color: 'white', fontSize: 18}}>Complete Assessment</Text>
				</TouchableHighlight>
			</View>
		</ScrollView>
		</View>
	)
}

/* Button implementation if Slider get's negative feedback
<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
	{scoreOptions.map((option) => {
		return <Button 
			onPress={() => {
				updateScore(i, option);
			}}
			title={option.toString()}
		/>
	})}
</View>
*/

/* Slider implementation
<Slider
	value={scores[i]}
	onValueChange={(value) => updateScore(i, value)}
	maximumValue={quiz.maxPerQuestion}
	minimumValue={quiz.minPerQuestion}
	thumbStyle={{height: 30, width: 30, backgroundColor: 'lightblue'}}
/>
*/