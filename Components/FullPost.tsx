import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FullPost = ({post}) => {
    return (
        <TouchableOpacity >
            <Text>{post.Title}</Text>
            <Text>{post.Author}</Text>
            <Text>{post.Likes} </Text>
            <Text>{post.NumReplies}</Text>
        </TouchableOpacity>
        
    )
}

export default FullPost

const styles = StyleSheet.create({})
