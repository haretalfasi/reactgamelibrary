import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Grid, Image, Message } from 'semantic-ui-react';
import { postGame } from '../store/actionCreators';

const GameForm = ({ postGame }) => {

	const initialState = { _id: '', title: '', cover: '', loading: false, success: false, errors: { title: false, cover: false } };

	const [{ _id, title, cover, loading, errors, success }, updateState] = useState(initialState);

	const validate = () => {
		let errors = {}
		if (!title.length) errors.title = { content: 'Title cannot be empty', pointing: 'below' };
		if (!cover.length) errors.cover = { content: 'Cover cannot be empty', pointing: 'below' };
		updateState(state => ({ ...state, errors }));

		return errors;
	}

	const handleSubmit = e => {
		e.preventDefault();

		validate();

		let isValid = Object.keys(validate()).length === 0;

		if (isValid && !success) {
			// Send new game
			(async () => {
				updateState(state => ({ ...state, loading: true }))
			})()
				.then(() => {
					setTimeout(() => {
						postGame({ title, cover });
						updateState(state => ({ ...state, loading: false, success: true }));
					}, 1000);
				})
		} else if (success) {
			// Show fields once again
			updateState(state => ({ ...initialState }))
		}
	}

	const handleChange = (e, { name, value }) => {
		updateState(state => ({ ...state, [name]: value }));
	}

	const handleBlur = () => {
		validate();
	}

	const formFields = (
		<React.Fragment>
			<Form.Input
				name='title'
				type="text"
				label='Title'
				placeholder='Game title'
				value={title}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.title}
			/>
			<Form.Input
				name='cover'
				type="text"
				label='Cover'
				placeholder='Cover Image'
				value={cover}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.cover}
			/>
		</React.Fragment>
	)

	return (
		<Form onSubmit={handleSubmit} loading={loading} success={success}>
			<Grid>
				<Grid.Row>
					<Grid.Column width={12}>
						<Message
							success
							header='Game Added!'
							content={`You have successfully added ${title} the database`}
						/>
						{!success && formFields}
						<Form.Field
							id='form-button-control-public'
							control={Button}
							content={success ? 'Add Another Game' : 'Add New Game'}
						/>
					</Grid.Column>
					<Grid.Column width={4}>
						{!success && <Image src={cover} rounded />}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Form>
	);
}

export default connect(null, { postGame })(GameForm);