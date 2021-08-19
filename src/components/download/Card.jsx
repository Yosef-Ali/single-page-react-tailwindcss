const Card = ({ type, version, imageURL }) => {
	return (
		<CardBody>
			<CardHeader>
				<img src={imageURL} alt={version} />
				<h3 className='mt-5 mb-2 text-lg text-bookmark-blue'>{type}</h3>
				<p className='mb-2 font-light text-bookmark-grey'>{`Minimum version${version}`}</p>
			</CardHeader>
			<hr className='border-b border-bookmark-white' />
			<CardFooter>
				<button
					type='button'
					className='flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black'
				>
					Add & Install Extension
				</button>
			</CardFooter>
		</CardBody>
	);
};

export default Card;

const CardBody = ({ children }) => (
	<div className='flex flex-col border-2 border-gray-100 rounded-md shadow-md lg:my-8'>
		{children}
	</div>
);

const CardHeader = ({ children }) => (
	<div className='flex flex-col items-center p-6'>{children}</div>
);
const CardFooter = ({ children }) => <div className='flex p-6'>{children}</div>;
