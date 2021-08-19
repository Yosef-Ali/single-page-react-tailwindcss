import React from 'react';

const sectionHeader = {
	title: 'Features',
	description:
		'Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.',
};

export const data = [
	{
		id: 1,
		imageURL: 'illustration-features-tab-1.svg',
		title: 'Bookmark in one click',
		description:
			'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
	{
		id: 2,
		imageURL: 'illustration-features-tab-2.svg',
		title: 'Intelligent search',
		description:
			'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
	{
		id: 3,
		imageURL: 'illustration-features-tab-3.svg',
		title: 'Share your bookmarks',
		description:
			'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
];
export const SectionHeader = () => (
	<div className='px-2 mx-auto sm:w-3/4 lg:w-5/12'>
		<h1 className='text-3xl text-center text-bookmark-blue'>
			{sectionHeader.title}
		</h1>
		<p className='mt-4 text-center text-bookmark-grey'>
			{sectionHeader.description}
		</p>
	</div>
);

const FeatureSection = ({ children }) => {
	return <div className='relative mt-20 lg:my-24'>{children}</div>;
};
const FeatureContainer = ({ id, children }) => {
	return (
		<div
			className={`container flex flex-col items-center justify-center  gap-x-24 ${
				id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row '
			}`}
		>
			{children}
		</div>
	);
};
const FeatureImage = ({ children }) => {
	return (
		<div className='z-10 flex justify-center flex-1 mb-10 lg:mb-0'>
			{children}
		</div>
	);
};
const FeatureContent = ({ children }) => {
	return (
		<div className='flex flex-col items-center flex-1 lg:items-start'>
			{children}
		</div>
	);
};
export const FeatureItem = ({ id, imageURL, title, description }) => {
	return (
		<FeatureSection>
			<FeatureContainer id={id}>
				<FeatureImage>
					<img
						className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
						//src={imageURL}
						src={`./images/${imageURL}`}
						alt=''
					/>
				</FeatureImage>

				<FeatureContent>
					<h1 className='text-3xl text-bookmark-blue'>{title}</h1>
					<p className='my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full'>
						{description}
					</p>
					<button
						type='button'
						className='btn btn-purple hover:bg-bookmark-white hover:text-black'
					>
						More Info
					</button>
				</FeatureContent>
			</FeatureContainer>
			<div
				className={`absolute hidden w-2/4 overflow-hidden rounded-r-full lg:block bg-bookmark-purple h-80 -bottom-24  ${
					id % 2 === 0 ? '-right-36 rounded-l-full' : '-left-36 rounded-r-full'
				}`}
			></div>
		</FeatureSection>
	);
};
