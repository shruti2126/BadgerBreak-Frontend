import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorageData = async (key: string, value: any) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value))
		return ''
	} catch (e: any) {
		return e.message
	}
}

export default setStorageData;