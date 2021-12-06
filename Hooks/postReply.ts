import axios from 'axios';
import url from './getUrl'

const postReply = async (reply) => {
	await fetch(url + '/replies', {
		method: 'POST',
		headers: {
			reply: JSON.stringify(reply)
		}
	})
}

export default postReply