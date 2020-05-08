import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Router from './Router';

const Wrapper = styled.div`
	width:100%;
	max-width:900px;
	margin:0 auto;
	padding-top:30px;
`;

function App() {
	return (
		<Wrapper>
			<Header />
			<Router />
		</Wrapper>
	);
}

export default App;