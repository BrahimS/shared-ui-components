import React from 'react';
import {
	Container,
	SmallBoxElement,
	StyleguideContainer,
} from '@react-monorepo/shared-ui';
import { TypographySection } from '../components/StyleGuide/Typography';

// Main Styleguide component
const Styleguide: React.FC = () => {
	return (
		<Container size="xl">
			<h1>UI Kit Library</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
				voluptatem distinctio eveniet voluptatum est iste, laudantium a officiis
				architecto, aspernatur veniam provident harum assumenda tempora dolorum!
			</p>
			<StyleguideContainer
				direction="row"
				gap="4"
				align="start"
				justify="between"
			>
				<TypographySection />
				<SmallBoxElement $isbig={true} />
			</StyleguideContainer>
		</Container>
	);
};

export default Styleguide;
