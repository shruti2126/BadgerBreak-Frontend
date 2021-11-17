import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReplyCard = ({reply, postId}) => {
    console.log("postid = " , postId)
    return (
        <View>
            <Text>{reply.Text}</Text>
            <Text>{reply.Author}</Text>
            <Text>{reply.PostId}</Text>
            <Text>{reply.Date}</Text> 
            <Text>{reply.Likes}</Text>
        </View>
    )
}

export default ReplyCard

const styles = StyleSheet.create({})
