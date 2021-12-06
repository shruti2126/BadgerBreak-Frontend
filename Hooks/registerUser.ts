const axios = require('axios');
const base64 = require('base-64');
import url from './getUrl'

type response = {
	token?: string,
	message?: string
}

const registerUser = async (email: string, password: string): Promise<response> => {
	const encoded = base64.encode(email + ':' + password);

	return await fetch(url + '/register', {
		method: 'POST',
		headers: {
			token: encoded,
		}
	})
		.then( (response: any) => response.json())		
		.catch( (err: any) => {return {message: err.message}})

}

export default registerUser;