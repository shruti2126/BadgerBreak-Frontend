import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import getStyles from '../Styling/Styling'
import { Post, Replies } from "../Interfaces/Interfaces";
import updateReply from '../Hooks/updateReply';
import getStorageData from '../Hooks/getStorageData';
import deleteReply from '../Hooks/deleteReply';

const styles = getStyles();

type propType = {
    reply: Replies,
    refresh: Function
}

const ReplyCard: React.FC<propType> = ({reply, refresh}) => {
    const [likes, setLikes] = useState<number>(reply.Likes);
    const [user, setUser] = useState<string>('')
    
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const data = await getStorageData('user')
        setUser(data.email)
    }

    const increaseLikes = () => {
        setLikes(likes + 1)
        updateLikes(likes + 1)
    }
    
    const updateLikes = (likes: number) => {
        reply.Likes = likes
        updateReply(reply)
    }
    
    return (
        <View style={[styles.postCard, {justifyContent: 'flex-end', width: 275, marginLeft: 65}]}>
            <Text>{reply.Text}</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity 
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: 50}}
                        onPress={increaseLikes}
                >
                    <View style={{marginTop: 0, display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                        <Image style={styles.like_image} source={require('../assets/like.webp')} /> 
                        <Text style={{fontSize: 20}}> {likes} </Text>
                    </View>
                </TouchableOpacity>
                {(reply.Author === user || reply.Author === 'admin@admin.com')?
                    <TouchableOpacity 
                        style={[styles.loginCard, styles.redBorder, {backgroundColor: '#white', height: 40, minWidth: '50%', margin: 15, marginLeft: 75}]}
                        onPress={() => {deleteReply(reply); refresh() }}
                    >
                        <Text style={{fontSize: 16, color: '#8f0000', textDecorationLine: 'underline', margin: 0}}>Delete</Text>
                    </TouchableOpacity>
                    : <></>
                }
            </View>
        </View>
    )
}

export default ReplyCard
