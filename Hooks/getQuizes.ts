import axios from 'axios';
import url from './getUrl';

const getQuizes = async () => {
	return await axios.get(url + '/quizzes')
		.then(response => response.data)
		.catch(error => []);
}

export default getQuizes;