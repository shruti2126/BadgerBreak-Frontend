const axios = require('axios');
const base64 = require('base-64');

const url = 'http://192.168.1.43:3001/register';

type response = {
	token?: string,
	message?: string
}

const registerUser = async (email: string, password: string): Promise<response> => {
	const encoded = base64.encode(email + ':' + password);

	return await fetch(url, {
		method: 'POST',
		headers: {
			token: encoded,
		}
	})
		.then( (response: any) => response.json())		
		.catch( (err: any) => {return {message: err.message}})

}

export default registerUser;