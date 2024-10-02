import React from 'react';
import { HeaderWrapper } from '../styles';
import { Container } from '../Grid/ContainerWrapper';

interface HeaderProps {
	logo: React.ReactNode;
	children: React.ReactNode;
}

export const Header = ({ logo, children }: HeaderProps): React.ReactNode => {
	return (
		<HeaderWrapper>
			<Container
				size="xl"
				padding="md"
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>{logo} </div>
				<div>{children}</div>
			</Container>
		</HeaderWrapper>
	);
};
