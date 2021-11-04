import axios from 'axios';

const url = 'http://192.168.1.43:3001/quizes';

const getQuizes = async () => {
	return axios.get(url)
		.then(response => JSON.parse(response))
		.catch(error => ['Could not fetch Quizes']);
}

export default getQuizes;