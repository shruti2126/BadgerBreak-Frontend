const axios = require('axios');
const base64 = require('base-64');

const url = 'http://192.168.1.76:3001/login';

type response = {
	token?: string,
	message?: string
}

const loginUser = async (email: string, password: string): Promise<response> => {
	const encoded = base64.encode(email + ':' + password);

	return await axios.get(url, {
		headers: {
			token: encoded
		}
	})
		.then( (response: any) => response.data)
		.catch( (err: any) => {return {message: err.message}})
}

export default loginUser;