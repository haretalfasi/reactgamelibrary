import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const GameCard = ({ game }) => {
	return (
		<Card>
			<Image src={game.cover} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{game.title}</Card.Header>
			</Card.Content>
		</Card>
	);
}

export default GameCard;