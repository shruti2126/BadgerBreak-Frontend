import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';

type CopingCardType = {
	emotion: string,
	text: string
}

type propType = {
	cCard: CopingCardType
}

const CopingCard : React.FC<propType> = ({cCard}) => {
	
	if (!cCard) {
		return <></>
	}

	return (
        <View style={{backgroundColor: "white", margin: 20, padding: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{cCard.emotion}</Text>
            <Text style={{fontSize: 14}}>{cCard.text}</Text>
        </View>
	)
}

export default CopingCard;