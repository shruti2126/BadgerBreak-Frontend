import axios from 'axios';
import url from './getUrl';

const getQuizes = async () => {
	return await axios.get(url + '/quizes')
		.then(response => response.data)
		.catch(error => ['Could not fetch Quizes', error.message]);
}

export default getQuizes;