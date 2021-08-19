export const Hero = () => (
	<HeroSection>
		{/* <!-- Content --> */}
		<HeroBody>
			<h2 className='mb-6 text-3xl text-center text-bookmark-blue md:text-4 lg:text-5xl lg:text-left'>
				A Simple Bookmark Manager
			</h2>
			<p className='mb-6 text-lg text-center text-bookmark-grey lg:text-left'>
				A clean and simple interface to organize your favourite websites. Open a new
				browser tab and see your sites load instantly. Try it for free.
			</p>
			<HeroCTA>
				<button
					type='button'
					className='btn btn-purple hover:bg-bookmark-white hover:text-black'
				>
					Get it on Chrome
				</button>
				<button
					type='button'
					className='btn btn-white hover:bg-bookmark-purple hover:text-white'
				>
					Get it on Firefox
				</button>
			</HeroCTA>
		</HeroBody>

		<HeroImg>
			<img
				className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
				src='/images/hero-bg.png'
				alt=''
			/>
		</HeroImg>
		{/* <!-- Rounded Rectangle --> */}
		<div className='absolute hidden w-2/4 overflow-hidden rounded-l-full lg:block bg-bookmark-purple h-80 lg:top-48 xl:top-60 -right-36'></div>
	</HeroSection>
);
const HeroSection = ({ children }) => {
	return (
		<section className='relative overflow-hidden'>
			<div className='container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:my-28'>
				{children}
			</div>
		</section>
	);
};

const HeroBody = ({ children }) => (
	<div className='flex flex-col items-center flex-1'>{children}</div>
);

const HeroCTA = ({ children }) => (
	<div className='flex flex-wrap justify-center gap-6'>{children}</div>
);

const HeroImg = ({ children }) => (
	<div className='z-10 flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0'>
		{children}
	</div>
);
