const Footer = () => {
	return (
		<SectionFooter className='py-8 bg-bookmark-blue'>
			<Container className='container flex flex-col items-center md:flex-row'>
				<Nav className='flex flex-wrap items-center justify-center flex-1 gap-12 md:justify-start'>
					<img src='/images/logo-bookmark-white.svg' alt='' />
					<ul className='flex gap-12 text-xs text-white uppercase '>
						<li className='transform cursor-pointer hover:scale-110'>Features</li>
						<li className='transform cursor-pointer hover:scale-110'>Pricing</li>
						<li className='transform cursor-pointer hover:scale-110'>Contact</li>
					</ul>
				</Nav>
				<Social className='flex gap-10 mt-12 list-none md:mt-0'>
					<li>
						<i className='text-2xl text-white cursor-pointer fab fa-twitter hover:opacity-75'></i>
					</li>
					<li>
						<i className='text-2xl text-white cursor-pointer fab fa-facebook-square hover:opacity-75'></i>
					</li>
				</Social>
			</Container>
		</SectionFooter>
	);
};

export default Footer;

const SectionFooter = ({ children }) => (
	<div className='py-8 bg-bookmark-blue'>{children}</div>
);

const Container = ({ children }) => (
	<div className='container flex flex-col items-center md:flex-row'>
		{children}
	</div>
);
const Nav = ({ children }) => (
	<div className='flex flex-wrap items-center justify-center flex-1 gap-12 md:justify-start'>
		{children}
	</div>
);

const Social = ({ children }) => (
	<div className='flex gap-10 mt-12 list-none md:mt-0'>{children}</div>
);
