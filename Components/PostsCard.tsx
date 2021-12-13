import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import getStyles from '../Styling/Styling'
import {Post} from '../Interfaces/Interfaces'
import { TouchableHighlight } from 'react-native-gesture-handler'

type propType = {
    post: Post,
    navigation: any,
}

const styles = getStyles();



const PostCard: React.FC<propType> = ({post, navigation}) => {
    const [likes, setLikes] = useState<Number>(post.Likes)
    
    // const increaseLikes = () => {
    //     var newLikes: Number = post.Likes + 1
    //     setLikes(newLikes)
    // }

    return (
        <TouchableOpacity 
            onPress={() => {navigation.navigate("Replies", {post})}}
            style={[styles.postCard, {width:'100%'}]}
        >
            <Text style={{alignSelf: 'flex-start', color: 'steelblue'}}>{post.Author}</Text>
            <Text style={{fontSize: 20}}>{post.Title}</Text>
            <View style={{height: 10}}/>
            <View style={styles.like}>
                <TouchableHighlight style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <>
                        <Image style={styles.like_image} source={require('../assets/like.webp')} /> 
                        <Text style={{fontSize: 20}}> {post.Likes}  </Text>
                    </>
                </TouchableHighlight>
                <Text> Comments: {post.NumReplies}</Text>
            </View>
        </TouchableOpacity>
       
    )
}

export default PostCard
