import Card from './Card';

const sectionHeader = {
	title: 'Download the extension',
	description:
		'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
};
const downloadData = [
	{
		id: 1,
		type: 'Chrome',
		version: 62,
		imageURL: './images/logo-chrome.svg',
	},
	{
		id: 2,
		type: 'Firefox',
		version: 62,
		imageURL: './images/logo-firefox.svg',
	},
	{
		id: 3,
		type: 'Opera',
		version: 62,
		imageURL: './images/logo-opera.svg',
	},
];
const SectionHeader = () => (
	<div className='px-2 mx-auto sm:w-3/4 lg:w-5/12'>
		<h1 className='text-3xl text-center text-bookmark-blue'>
			{sectionHeader.title}
		</h1>
		<p className='mt-4 text-center text-bookmark-grey'>
			{sectionHeader.description}
		</p>
	</div>
);

const Download = () => {
	return (
		<section className='py-20 mt-20'>
			<SectionHeader />
			<div className='container grid max-w-screen-lg grid-cols-1 gap-16 mt-16 md:grid-cols-2 lg:grid-cols-3'>
				{downloadData &&
					downloadData.map(({ id, type, version, imageURL }) => (
						<Card id={id} type={type} version={version} imageURL={imageURL} />
					))}
			</div>
		</section>
	);
};

export default Download;
