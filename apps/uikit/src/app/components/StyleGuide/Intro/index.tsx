import { Box, Heading } from '@react-monorepo/shared-ui';
import React from 'react';
interface IntroProps {
	title: string;
	description: string;
}

export const Intro: React.FC<IntroProps> = ({
	title,
	description,
}: IntroProps) => {
	return (
		<Box w="100%" as="div" asChild>
			<Heading as="h1">{title}</Heading>
			<p>{description}</p>
		</Box>
	);
};
