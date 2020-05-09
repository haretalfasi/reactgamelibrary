import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../store/actionCreators';
import { Card } from 'semantic-ui-react'
import GameCard from './GameCard';

const GamesPage = ({ games, fetchGames }) => {

	useEffect(() => {
		if (!games.gamesLoaded) fetchGames();
	}, [])

	return (
		<React.Fragment>
			<h1>Games Page</h1>
			<Card.Group itemsPerRow={4}>
				{games.gamesList.map(game => <GameCard game={game} key={game._id} />)}
			</Card.Group>
		</React.Fragment>
	);
}

const mapStateToProps = ({ games }) => ({
	games
})

export default connect(mapStateToProps, { fetchGames })(GamesPage);