import axios from 'axios';
import { Replies } from '../Interfaces/Interfaces';
import url from './getUrl'

const updateReply = async (reply: Replies) => {
	await fetch(url + '/updateReplyLikes', {
		method: 'PUT',
		headers: {
			reply: JSON.stringify(reply)
		}
	})
}

export default updateReply