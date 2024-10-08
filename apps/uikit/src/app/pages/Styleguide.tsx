import React from 'react';
import { Container, FlexBox, theme } from '@react-monorepo/shared-ui';
import { TypographySection } from '../components/StyleGuide/Typography';
import { Colors } from '../components/StyleGuide/Colors';
import { Intro } from '../components/StyleGuide/Intro';
import { Buttons } from '../components/StyleGuide/Buttons';
import { Forms } from '../components/Form';

// Main Styleguide page
const Styleguide: React.FC = () => {
	return (
		<Container size="xl">
			<Intro />
			<FlexBox
				style={{
					width: '100%',
					marginTop: theme.spacing.md,
				}}
				display="flex"
				direction="column"
				justify="space-between"
				gap="4"
				wrap="wrap"
				align="start"
			>
				<Colors />
				<TypographySection />
				<Buttons />
				<Forms />
			</FlexBox>
		</Container>
	);
};
export default Styleguide;
