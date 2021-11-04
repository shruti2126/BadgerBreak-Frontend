import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageData = async (value: string) => {
	try {
	  const jsonValue = await AsyncStorage.getItem(value)
	  return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch(e) {
	  return null;
	}
}

export default getStorageData;