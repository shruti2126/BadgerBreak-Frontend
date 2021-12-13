import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import getStyles from '../Styling/Styling'
import { Post, Replies } from "../Interfaces/Interfaces";

const styles = getStyles();

type propType = {
    reply: Replies,
    author: String,
}
//marginRight: marginR, marginLeft: marginL, width: '75%',

const ReplyCard: React.FC<propType> = ({reply, author}) => {

    const marginR = (reply.Author === author)? 0     : '30%'
    const marginL = (reply.Author === author)? '30%' :  0
    const align   = (reply.Author === author)? 'flex-end' : 'flex-start'
    
    return (
        <View style={[styles.postCard, {justifyContent: 'flex-end'}]}>
            <Text>{reply.Text}</Text>
            <Text>Author: {reply.Author}</Text>
            <Text>Likes: {reply.Likes}</Text>
        </View>
    )
}

export default ReplyCard
