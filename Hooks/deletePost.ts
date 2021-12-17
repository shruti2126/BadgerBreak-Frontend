import axios from 'axios';
import url from './getUrl'

const deletePost = async (post) => {
	await fetch(url + '/posts', {
		method: 'DELETE',
		headers: {
			post: JSON.stringify(post)
		}
	})
}

export default deletePost