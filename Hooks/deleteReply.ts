import url from './getUrl'

const deleteReply = async (reply) => {
	await fetch(url + '/replies', {
		method: 'DELETE',
		headers: {
			post: JSON.stringify(reply)
		}
	})
}

export default deleteReply