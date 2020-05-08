import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GamesPage from './GamesPage';
import Game from './Game';

const Router = () => (
	<Switch>
		<Route exact path="/" component={GamesPage} />
		<Route exact path="/game" component={Game} />
	</Switch>
)

export default Router;