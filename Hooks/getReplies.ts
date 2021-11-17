import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import url from './getUrl'


const getReplies = async () => {
	return await axios.get(url + '/replies')
		.then(response => response.data)
		.catch(error => ['Could not fetch replies']);
}

export default getReplies

const styles = StyleSheet.create({})
