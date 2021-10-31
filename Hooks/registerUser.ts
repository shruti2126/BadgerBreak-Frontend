import axios from "axios";

const url = 'http://192.168.1.43:3001/login';

const registerUser = async (email: string, password: string) => {
	// TODO: register new user to firestore
	return axios.post(url, {email: email, password: password})
		.then((response: any) => JSON.stringify(response.data))
		.catch((error: any) => alert(error.message));
}

export default registerUser;