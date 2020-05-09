import game from './gameReducer';

const initialState = {
	gamesList: [],
	gamesLoading: false,
	gamesLoaded: false,
}

const games = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_GAME':
			return {
				...state,
				gamesList: [...state.gamesList, game({}, action)],
			}
		case 'ADD_GAMES':
			return {
				...state,
				gamesList: [...action.payload],
				gamesLoaded: true
			}
		default:
			return state;
	}
}

export default games;