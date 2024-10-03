import React from 'react';
import {
	Box,
	colorScheme,
	Container,
	FlexBox,
	StyleguideContainer,
	theme,
} from '@react-monorepo/shared-ui';
import { TypographySection } from '../components/StyleGuide/Typography';

// Main Styleguide page
const Styleguide: React.FC = () => {
	return (
		<Container size="xl">
			<h1>UI Kit Library</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
				voluptatem distinctio eveniet voluptatum est iste, laudantium a officiis
				architecto, aspernatur veniam provident harum assumenda tempora dolorum!
			</p>
			<FlexBox
				gap="1"
				wrap="wrap"
				align="stretch"
				justify="between"
				style={{ marginTop: '2rem', width: '40%' }}
			>
				{Object.entries(colorScheme).map(([key, value]) => (
					<Box
						w="64px"
						h="64px"
						style={{
							backgroundColor: value,
							borderRadius: theme.spacing.md,
							color: 'white',
						}}
					>
						{key}
					</Box>
				))}
			</FlexBox>
			<StyleguideContainer
				direction="row"
				gap="4"
				align="start"
				justify="between"
				wrap="nowrap"
			>
				<TypographySection />
			</StyleguideContainer>
		</Container>
	);
};

export default Styleguide;
