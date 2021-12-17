import { Replies } from '../Interfaces/Interfaces';
import url from './getUrl'

const deleteReply = async (reply: Replies) => {
	await fetch(url + '/deleteReply', {
		method: 'DELETE',
		headers: {
			reply: JSON.stringify(reply)
		}
	})
}

export default deleteReply