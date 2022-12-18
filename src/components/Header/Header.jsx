import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiShoppingBagLine, RiHeartLine, RiMenuLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import './header.css';

import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

const nav__links = [
	{
		path: 'home',
		display: 'Home',
	},
	{
		path: 'shop',
		display: 'Shop',
	},
	{
		path: 'cart',
		display: 'Cart',
	},
];

const Header = () => {
	return (
		<header className='header'>
			<Container>
				<Row>
					<div className='nav__wrapper'>
						<Link to='/home' className='logo'>
							<img src={logo} alt='Logo' />
							<div>
								<h1>Multimart</h1>
							</div>
						</Link>
						<div className='navigation'>
							<ul className='menu'>
								{nav__links.map((item, index) => (
									<li className='nav__item' key={index}>
										<NavLink
											to={item.path}
											className={(navClass) => (navClass.isActive ? 'nav__active' : '')}>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className='nav__icons'>
							<span className='fav__icon'>
								<RiHeartLine className='ri__icon' />
								<span className='badge'>1</span>
							</span>
							<span className='cart__icon'>
								<RiShoppingBagLine className='ri__icon' />
								<span className='badge'>1</span>
							</span>
							<span>
								<motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt='User' />
							</span>
						</div>

						<div className='mobile__menu'>
							<span>
								<RiMenuLine />
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
