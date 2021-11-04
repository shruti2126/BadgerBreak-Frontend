import React from 'react';
import {Button, Text, View} from 'react-native';

const QuizCard = ({navigation, quiz}) => {
	if (!quiz) {
		return <></>
	}
	return (
		<View style={{backgroundColor: 'white', width: '100%', margin: 20, padding: 20}}>
			<Text>{quiz.title}</Text>
			<Text>{quiz.description}</Text>
			<Button 
				onPress={() => navigation.navigate('TakeAssessment', {quiz: quiz})}
				title='Take Assessment'
			/>
		</View>
	)
}

export default QuizCard;