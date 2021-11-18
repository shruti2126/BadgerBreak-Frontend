import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import getStyles from '../Styling/Styling'

const styles = getStyles();

const ReplyCard = ({reply, author}) => {

    const marginR = (reply.author === author)? 0     : '30%'
    const marginL = (reply.author === author)? '30%' :  0
    const align   = (reply.author === author)? 'flex-end' : 'flex-start'

    return (
        <View style={[styles.card, {marginRight: marginR, marginLeft: marginL, width: '65%', alignItems: align}]}>
            <Text>{reply.Text}</Text>
            <Text>Author: {reply.Author}</Text>
            <Text>Likes: {reply.Likes}</Text>
        </View>
    )
}

export default ReplyCard
