import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

const url = 'http://localhost:3001/replies';


const getReplies = async () => {
	return await axios.get(url)
		.then(response => response.data)
		.catch(error => ['Could not fetch replies']);
}

export default getReplies

const styles = StyleSheet.create({})
