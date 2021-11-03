import axios from "axios";

const url = 'http://localhost:3001/login';

const registerUser = async (email: string, password: string) => {
	return axios.post(url, {email: email, password: password})
		.then((response: any) => JSON.stringify(response.data))
		.catch((error: any) => alert(error.message));
}

export default registerUser;