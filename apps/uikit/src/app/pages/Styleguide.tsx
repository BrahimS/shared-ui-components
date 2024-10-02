import React from 'react';
import { BoxElement, Container, FlexBox } from '@react-monorepo/shared-ui';

const Styleguide = (): React.ReactNode => {
	return (
		<Container size="xl">
			<FlexBox
				direction="row"
				gap="4"
				align="start"
				justify="between"
				style={{ padding: '8px 0', width: '100%' }}
			>
				<BoxElement $isbig={true} style={{ padding: '24px', width: '70%' }}>
					<p>Typography</p>
					<FlexBox
						direction="row"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="center"
						style={{ alignContent: 'center' }}
					>
						<div>
							<h1 style={{ width: '5%', color: 'grey' }}>H1</h1>
						</div>
						<div style={{ width: '90%', paddingBottom: '8px' }}>
							<h1>This is the styleguide</h1>
						</div>
					</FlexBox>
					<FlexBox
						direction="row"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="center"
					>
						<div>
							<h2 style={{ width: '5%', color: 'grey' }}>H2</h2>
						</div>
						<div style={{ width: '90%', paddingBottom: '8px' }}>
							<h2>This is the styleguide</h2>
						</div>
					</FlexBox>
					<FlexBox
						direction="row"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="center"
					>
						<div>
							<h3 style={{ width: '5%', color: 'grey' }}>H3</h3>
						</div>
						<div style={{ width: '90%', paddingBottom: '8px' }}>
							<h3>This is the styleguide</h3>
						</div>
					</FlexBox>
					<FlexBox
						direction="row"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="center"
					>
						<div>
							<h4 style={{ width: '5%', color: 'grey' }}>H4</h4>
						</div>
						<div style={{ width: '90%', paddingBottom: '8px' }}>
							<h4>This is the styleguide</h4>
						</div>
					</FlexBox>
					<FlexBox
						direction="row"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="center"
					>
						<div style={{ paddingBottom: '8px' }}>
							<h5 style={{ width: '5%', color: 'grey' }}>H5</h5>
						</div>
						<div style={{ width: '90%', paddingBottom: '8px' }}>
							<h5>This is the styleguide</h5>
						</div>
					</FlexBox>
					<FlexBox
						direction="column"
						gap="4"
						wrap="nowrap"
						justify="between"
						align="start"
						style={{ paddingTop: '24px' }}
					>
						<p>Paragraph </p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequuntur dolore rem modi laboriosam deleniti vitae. Aspernatur
							saepe itaque, numquam autem inventore, magnam, aperiam quidem quis
							ea id minima nemo corporis!
						</p>
					</FlexBox>
				</BoxElement>

				<BoxElement
					$isbig={true}
					style={{ padding: '16px', width: '5%' }}
				></BoxElement>
			</FlexBox>
		</Container>
	);
};

export default Styleguide;
