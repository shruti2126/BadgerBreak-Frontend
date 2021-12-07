import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import getStyles from '../Styling/Styling'
import {Post} from '../Interfaces/Interfaces'

type propType = {
    post: Post,
    navigation: any,
}

const styles = getStyles();

const PostCard: React.FC<propType> = ({post, navigation}) => {
    return (
        <TouchableOpacity 
            onPress={() => {navigation.navigate("Replies", {post})}}
            style={styles.card}
        >
            <Text style={{fontSize: 24}}>{post.Title}</Text>
            <Text>{post.Author}</Text>
            <Text>{post.Likes} </Text>
            <Text>{post.NumReplies}</Text>
        </TouchableOpacity>
    )
}

export default PostCard
