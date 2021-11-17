import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const PostCard = ({post, navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate("Replies", {post})}}>
                <Text>{post.Title}</Text>
                <Text>{post.Author}</Text>
                <Text>{post.Likes} </Text>
                <Text>{post.NumReplies}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({})
