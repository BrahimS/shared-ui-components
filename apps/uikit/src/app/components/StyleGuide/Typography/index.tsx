import React from 'react';
import {
	FlexBox,
	Heading,
	ParagraphContainer,
	TagText,
	Box,
	theme,
} from '@react-monorepo/shared-ui';
import { Link } from 'react-router-dom';

export const TypographyExample: React.FC<{
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
}> = ({ tag, children }) => (
	<FlexBox
		style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start',
			justifyContent: 'start',
		}}
	>
		<TagText style={{ marginRight: '1.5rem' }}>{tag}</TagText>
		<Heading as={tag}> {children}</Heading>
	</FlexBox>
);

export const TypographySection: React.FC = () => (
	<Box
		w="60%"
		as={'div'}
		asChild={false}
		shadow={theme.shadows.medium}
		borderRadius={theme.spacing.sm}
		p={theme.spacing.md}
	>
		<TagText>Typography</TagText>
		<ul style={{ marginBottom: '1.5rem' }}>
			<li>Font family: Poppins</li>
			<li>
				source:{' '}
				<Link to="https://fonts.google.com/specimen/Poppins" target="_blank">
					Poppins
				</Link>
			</li>
		</ul>
		<TagText>Headlines</TagText>
		<TypographyExample tag="h1">The styleguide</TypographyExample>
		<TypographyExample tag="h2">The styleguide</TypographyExample>
		<TypographyExample tag="h3">The styleguide</TypographyExample>
		<TypographyExample tag="h4">The styleguide</TypographyExample>
		<TypographyExample tag="h5">The styleguide</TypographyExample>
		<ParagraphContainer
			direction="column"
			gap="0"
			wrap="nowrap"
			justify="space-between"
			align="start"
		>
			<TagText>Paragraph</TagText>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				dolore rem modi laboriosam deleniti vitae. Aspernatur saepe itaque,
				numquam autem inventore, magnam, aperiam quidem quis ea id minima nemo
				corporis!
			</p>
		</ParagraphContainer>
	</Box>
);
