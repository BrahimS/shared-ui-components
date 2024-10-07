import React from 'react';
import {
	Box,
	colorScheme,
	Container,
	FlexBox,
	Heading,
	StyleguideContainer,
	TagUnderlinedText,
	theme,
	TypographySectionWrapper,
} from '@react-monorepo/shared-ui';
import { TypographySection } from '../components/StyleGuide/Typography';

// Main Styleguide page
const Styleguide: React.FC = () => {
	return (
		<Container size="xl">
			<Heading as="h1">UI Kit Library</Heading>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
				voluptatem distinctio eveniet voluptatum est iste, laudantium a officiis
				architecto, aspernatur veniam provident harum assumenda tempora dolorum!
			</p>
			<FlexBox
				gap="1"
				wrap="wrap"
				align="start"
				justify="start"
				style={{ width: '40%' }}
			>
				<TypographySectionWrapper $isbig={false} style={{ width: '100%' }}>
					<TagUnderlinedText>Colors</TagUnderlinedText>
				</TypographySectionWrapper>
				{Object.entries(colorScheme).map(([key, value]) => (
					<Box
						key={key}
						w="100px"
						h="100px"
						style={{
							backgroundColor: value,
							borderRadius: theme.spacing.md,
							color:
								value === theme.colors.white || value === theme.colors.cream
									? theme.colors.black
									: theme.colors.white,
							boxSizing: 'border-box',
							minWidth: '100px',
							maxWidth: '100px',
							textAlign: 'center',
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
