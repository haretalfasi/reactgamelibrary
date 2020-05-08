import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Header = () => {

	return (
		<div className="menu ui">
			<Menu.Item as={NavLink} exact to="/" >Games</Menu.Item>
			<Menu.Item as={NavLink} exact to="/game" >Add</Menu.Item>
		</div>
	);
}

export default Header;