import React from 'react';
import { HeaderWrapper } from '../styles';
import { Container } from '../Grid/ContainerWrapper';

interface HeaderProps {
	logo: React.ReactNode;
	children: React.ReactNode;
	style: React.CSSProperties;
}

export const Header = ({
	logo,
	children,
	style,
}: HeaderProps): React.ReactNode => {
	return (
		<HeaderWrapper style={style}>
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
