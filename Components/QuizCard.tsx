import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const QuizCard = ({navigation, quiz}) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('TakeAssessment', {quiz: quiz})}
		>
			<Text style={{fontSize: 18}}>{quiz.title}</Text>
			<Text style={{fontSize: 12}}>{quiz.description}</Text>
		</TouchableOpacity>
	)
}

export default QuizCard;