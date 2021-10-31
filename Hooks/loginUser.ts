const axios = require('axios');

const url = 'http://192.168.1.43:3001/login';

const loginUser = async (email: string, password: string) => {
	// TODO: authenticate existing user from firestore
	return axios.get(url, {
		headers: {
			email: email,
			password: password
		}
	})
		.then( (response: any) => JSON.stringify(response.data))
		.catch( (err: any) => {return err})
}

export default loginUser;