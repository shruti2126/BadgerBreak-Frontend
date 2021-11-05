import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';

const QuizCard = ({ccard}) => {
	if (!ccard) {
		return <></>
	}
	return (
        <View style={{backgroundColor: "white", margin: 20, padding: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{ccard.emotion}</Text>
            <Text style={{fontSize: 14}}>{ccard.text}</Text>
        </View>
	)
}

export default QuizCard;