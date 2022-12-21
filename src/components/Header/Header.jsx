import React, { useRef, useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiShoppingBagLine, RiHeartLine, RiMenuLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import './header.scss';

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
	const headerRef = useRef(null);
	const openRef = useRef();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	const openMenu = () => {
		setOpen(true);
		document.body.classList.add('no-scroll');
	};

	const closeMenu = () => {
		setOpen(false);
		document.body.classList.remove('no-scroll');
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (event.target === openRef.current) {
				closeMenu();
			}
		};
		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const navigateToCart = () => {
		navigate('/cart');
	};

	// const stikyHeaderFunc = () => {
	// 	window.addEventListener('scroll', () => {
	// 		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	// 			headerRef.current.classList.add('sticky__header');
	// 		} else {
	// 			headerRef.current.classList.remove('sticky__header');
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	stikyHeaderFunc();

	// 	return () => {
	// 		window.removeEventListener('scroll', stikyHeaderFunc);
	// 	};
	// }, []);

	return (
		<header className='header' ref={headerRef}>
			<Container>
				<Row>
					<div className='nav__wrapper'>
						<Link to='/home' className='logo'>
							<img src={logo} alt='Logo' />
							<div>
								<h1>Multimart</h1>
							</div>
						</Link>
						<div ref={openRef} className={open ? 'navigation active__menu' : 'navigation'}>
							<ul className='menu'>
								{nav__links.map((item, index) => (
									<li className='nav__item' key={index}>
										<NavLink
											onClick={closeMenu}
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
							<span className='cart__icon' onClick={navigateToCart}>
								<RiShoppingBagLine className='ri__icon' />
								<span className='badge'>{totalQuantity}</span>
							</span>
							<span>
								<Link to='/login'>
									<motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt='User' />
								</Link>
							</span>
							<div className='mobile__menu'>
								<span onClick={openMenu}>
									<RiMenuLine className='mobile__menu-icon' />
								</span>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
