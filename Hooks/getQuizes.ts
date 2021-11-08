import axios from 'axios';

const url = 'http://localhost:3001/quizes';

const getQuizes = async () => {
	return await axios.get(url)
		.then(response => response.data)
		.catch(error => ['Could not fetch Quizes']);
}

export default getQuizes;