import { FeatureItem, data, SectionHeader } from './FeatureItem';

function Feature() {
	return (
		<section className='py-20 mt-20 overflow-hidden bg-bookmark-white'>
			<SectionHeader />
			{data.map(({ id, imageURL, title, description }) => (
				<FeatureItem
					id={id}
					imageURL={imageURL}
					title={title}
					description={description}
				/>
			))}
		</section>
	);
}

export default Feature;
