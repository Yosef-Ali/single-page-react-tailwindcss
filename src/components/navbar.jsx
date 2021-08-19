import React, { useState } from 'react';
//import navItem from './navItem';
const navLists = [
	{ id: 1, title: 'Features' },
	{ id: 2, title: 'Pricing' },
	{ id: 3, title: 'Contact' },
];
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		// <!-- Navbar goes here -->
		<nav className='container relative flex items-center py-4 mt-4 sm:mt-12'>
			<div className='py-1'>
				<img src='/images/logo-bookmark.svg' alt='' />
			</div>
			<ul className='items-center justify-end flex-1 hidden gap-12 text-xs uppercase cursor-pointer sm:flex text-bookmark-blue '>
				{navLists.map((navList) => (
					<li key={navList.id} className='transform hover:scale-110'>
						{navList.title}
					</li>
				))}
				<button
					type='button'
					className='py-3 text-white uppercase rounded-md bg-bookmark-red px-7 hover:opacity-75'
				>
					Login
				</button>
			</ul>
			<div className='flex justify-end flex-1 sm:hidden'>
				<i
					className='text-2xl fas fa-bars'
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				></i>
			</div>

			{/* <!-- mobile menu --> */}
			<ul
				className={`z-10 gap-6  text-bookmark-blue uppercase text-xs absolute top-20 ${
					!isOpen ? 'hidden' : 'flex flex-col'
				} `}
			>
				{navLists.map((navList) => (
					<li key={navList.id}>{navList.title}</li>
				))}
				<button
					type='button'
					className='py-3 text-white uppercase rounded-md bg-bookmark-red px-7'
				>
					Login
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;
