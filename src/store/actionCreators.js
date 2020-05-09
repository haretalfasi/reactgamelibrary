import axios from 'axios';

export const addGame = game => ({
	type: 'ADD_GAME',
	payload: game
});

export const addGames = games => ({
	type: 'ADD_GAMES',
	payload: games
});

export const postGame = game => {
	console.log('Yo!');
	return dispatch => {
		axios.post('/games', game)
			.then(res => {
				dispatch(addGame(res.data));
			})
			.catch(err => console.log(err));
	}
}

export const fetchGames = () => {
	return dispatch => {
		axios.get('/games')
			.then(res => {
				dispatch(addGames(res.data))
			})
			.catch(err => console.log(err));
	}
}