const ContactUs = () => {
	return (
		<Section className='py-20 text-white bg-bookmark-purple'>
			<div className='container'>
				<SectionInfo>
					<p className='mb-8 font-light text-center uppercase'>
						35,000+ ALREADY JOINED
					</p>
					<h1 className='text-2xl text-center'>
						Stay up-to-date with what we’re doing
					</h1>
					<FormInput>
						<input
							type='text'
							placeholder='Enter your email address'
							className='flex-1 px-2 py-3 text-black rounded-md focus:outline-none'
						/>
						<button
							type='button'
							className='btn bg-bookmark-red hover:bg-bookmark-white hover:text-black'
						>
							Contact Us
						</button>
					</FormInput>
				</SectionInfo>
			</div>
		</Section>
	);
};

export default ContactUs;

const Section = ({ children }) => (
	<section className='py-20 text-white bg-bookmark-purple'>{children}</section>
);
const SectionInfo = ({ children }) => (
	<div className='mx-auto sm:w-3/4 lg:w-2/4'>{children}</div>
);
const FormInput = ({ children }) => (
	<div className='flex flex-col gap-6 mt-8 sm:flex-row'>{children}</div>
);
