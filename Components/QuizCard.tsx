import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';

type QuizCardType = {
	title: string,
	description: string,
	questions: string[],
	minPerQuestion: number,
	maxPerQuestion: number,
	answerLegend: string[],
}

type propType = {
	navigation: any,
	quiz: QuizCardType
}

const QuizCard : React.FC<propType> = ({navigation, quiz}) => {

	if (!quiz) {
		return <></>
	}

	return (
		<TouchableOpacity
			onPress={() => {navigation.navigate('TakeAssessment', { quiz: quiz })}}
		>
			<View style={{backgroundColor: 'white', width: '100%', margin: 20, padding: 20}}>
				<Text style={{fontSize: 14, fontWeight: 'bold'}}>{quiz.title}</Text>
				<Text>{quiz.description}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default QuizCard;