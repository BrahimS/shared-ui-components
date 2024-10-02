import React from 'react';
import { Helmet } from 'react-helmet';
interface HeadProps {
	title: string;
	description: string;
	keywords: string;
}
export const Head = ({ title, description, keywords }: HeadProps) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
			/>
		</Helmet>
	);
};
