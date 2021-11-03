const axios = require('axios');

const url = 'http://localhost:3001/login';

const loginUser = async (email: string, password: string) => {
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