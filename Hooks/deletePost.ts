import { Post } from '../Interfaces/Interfaces';
import url from './getUrl'

const deletePost = async (post: Post) => {
	await fetch(url + '/deletePost', {
		method: 'DELETE',
		headers: {
			post: JSON.stringify(post)
		}
	})
}

export default deletePost