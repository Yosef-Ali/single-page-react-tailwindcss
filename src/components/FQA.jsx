import { Disclosure, Transition } from '@headlessui/react';

const sectionHeader = {
	title: 'Frequently Asked Questions',
	description:
		'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.',
};

const data = [
	{
		id: 1,
		question: 'What is a Bookmark?',
		answer:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis.',
	},
	{
		id: 2,
		question: 'What about other Chromium browsers?',
		answer:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis.',
	},
	{
		id: 3,
		question: 'How can I request a new browser?',
		answer:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis.',
	},
	{
		id: 4,
		question: 'Is there a mobile app?',
		answer:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis.',
	},
];
const FQA = () => {
	//const [open, setOpen] = useState(false);

	return (
		<Section>
			<SectionHeader>
				<h1 className='text-3xl text-center text-bookmark-blue'>
					{sectionHeader.title}
				</h1>
				<p className='mt-4 text-center text-bookmark-grey'>
					{sectionHeader.description}
				</p>
			</SectionHeader>
			<div className='container'>
				<Accordion>
					{data &&
						data.map((item) => (
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button
											className={`flex items-center flex-1 ${open ? '' : 'border-b'}`}
										>
											<span className='flex flex-1 py-4 text-lg'>{item.question}</span>
											<i
												className={`text-bookmark-purple  fas ${
													open ? 'fa-chevron-up  ' : 'fa-chevron-down  '
												}`}
											></i>
										</Disclosure.Button>
										<Transition
											enter='transition duration-200 ease-out'
											enterFrom='transform scale-95 opacity-0'
											enterTo='transform scale-100 opacity-100'
											leave='transition duration-300 ease-out'
											leaveFrom='transform scale-100 opacity-100'
											leaveTo='transform scale-95 opacity-0'
										>
											<Disclosure.Panel className='pt-2 border-b'>
												{item.answer}
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
						))}
					<button
						type='button'
						className='flex self-center mt-12 btn btn-purple hover:bg-bookmark-white hover:text-black'
					>
						More Info
					</button>
				</Accordion>
			</div>
		</Section>
	);
};

export default FQA;

const Section = ({ children }) => (
	<section className='py-20 bg-bookmark-white'>{children}</section>
);

const SectionHeader = ({ children }) => (
	<div className='px-2 mx-auto sm:w-3/4 lg:w-5/12'>{children}</div>
);
const Accordion = ({ children }) => (
	<div className='flex flex-col mx-auto mt-12 sm:w-3/4 lg:w-5/12'>
		{children}
	</div>
);
