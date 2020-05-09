const router = require('express').Router();
let Game = require('../models/game.model');

// Validator function
const validate = (data) => {
	let errors = {};
}

// Add Game
router.route('/').post((req, res) => {
	const { title, cover } = req.body;
	const newGame = new Game({ title, cover });
	newGame.save()
		.then(game => res.json(game))
		.catch(err => res.status(500).json(err))
});

// Get Games
router.route('/').get((req, res) => {
	console.log('Getting those games yo!');
	Game.find()
		.then(games => res.json(games))
		.catch(err => res.error(500).json(err));
});

module.exports = router;