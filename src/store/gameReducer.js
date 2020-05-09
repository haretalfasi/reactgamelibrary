const game = (state = {}, action) => {
	// Deconstruct action
	const { type, payload } = action;

	switch (type) {
		case 'ADD_GAME':
			return {
				_id: payload._id,
				title: payload.title,
				cover: payload.cover,
				loading: false,
				success: false,
				errors: { title: false, cover: false }
			}
		default:
			return state;
	}
}

export default game;
