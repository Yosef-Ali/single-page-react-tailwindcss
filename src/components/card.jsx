const data = {
	title: 'Card title',
	content:
		'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
};

export const CardPage = () => (
	<div className='w-full mx-auto md:w-2/12'>
		<Card>
			<img
				src='https://res.cloudinary.com/beloved/image/upload/v1608682938/Assets/632198_sgrp38.jpg'
				alt='something'
				width={1200}
				height={600}
				className='h-auto max-w-full'
			/>
			<CardBody>
				<CardTitle>{data.title}</CardTitle>
				<CardText>{data.content}</CardText>
			</CardBody>
		</Card>
	</div>
);
/* Logic */
const style = {
	card: `relative flex flex-col border-2 border-gray-200 rounded-lg`,
	cardBody: `block flex-grow flex-shrink p-5`,
	cardTitle: `font-medium text-gray-700 mb-3`,
	cardText: `text-gray-500`,
};
const inlineStyle = {
	boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};
function Card({ children }) {
	return (
		<div className={style.card} style={inlineStyle}>
			{children}
		</div>
	);
}
function CardBody({ children }) {
	return <div className={style.cardBody}>{children}</div>;
}
function CardTitle({ children }) {
	return <div className={style.cardTitle}>{children}</div>;
}
function CardText({ children }) {
	return <div className={style.cardText}>{children}</div>;
}
