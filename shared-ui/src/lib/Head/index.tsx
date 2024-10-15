import React from 'react';
import { Helmet } from 'react-helmet';
import { fontUrl } from '../styles';
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
			<link rel="stylesheet" href={fontUrl} />
		</Helmet>
	);
};
