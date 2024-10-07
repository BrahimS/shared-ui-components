import React from 'react';
import {
	Box,
	colorScheme,
	Container,
	FlexBox,
	Heading,
	TagText,
	theme,
} from '@react-monorepo/shared-ui';
import { TypographySection } from '../components/StyleGuide/Typography';

// Main Styleguide page
const Styleguide: React.FC = () => {
	return (
		<Container size="xl">
			<Box w="100%" as="div" asChild>
				<Heading as="h1">UI Kit Library</Heading>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
					voluptatem distinctio eveniet voluptatum est iste, laudantium a
					officiis architecto, aspernatur veniam provident harum assumenda
					tempora dolorum!
				</p>
			</Box>

			<FlexBox
				style={{
					width: '100%',
				}}
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				wrap="nowrap"
				align="start"
			>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					alignItems="start"
					flexWrap="wrap"
					w="38%"
					p={theme.spacing.sm}
					shadow={theme.shadows.medium}
					borderRadius={theme.spacing.sm}
					as={'div'}
					asChild={false}
				>
					<Box as="div" asChild w="100%" p="8px 0">
						<TagText>Colors</TagText>
					</Box>
					{Object.entries(colorScheme).map(([key, value]) => (
						<Box
							key={key}
							w="100px"
							h="100px"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							shadow={theme.shadows.medium}
							flexWrap="wrap"
							borderRadius={theme.spacing.xs}
							m={theme.spacing.xs}
							bg={value}
							style={{
								color:
									value === theme.colors.white || value === theme.colors.cream
										? theme.colors.black
										: theme.colors.white,
							}}
							as="div"
							asChild
						>
							{key}
						</Box>
					))}
				</Box>
				<TypographySection />
			</FlexBox>
		</Container>
	);
};

export default Styleguide;
