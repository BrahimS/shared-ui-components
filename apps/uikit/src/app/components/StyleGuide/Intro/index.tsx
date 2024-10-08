import { Box, Heading } from '@react-monorepo/shared-ui';
import React from 'react';

export const Intro = () => {
	return (
		<Box w="100%" as="div" asChild>
			<Heading as="h1">UI Kit Library</Heading>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
				voluptatem distinctio eveniet voluptatum est iste, laudantium a officiis
				architecto, aspernatur veniam provident harum assumenda tempora dolorum!
			</p>
		</Box>
	);
};
