import React from 'react';
import { MainWrapper } from '../styles';

interface MainContentProps {
	children: React.ReactNode;
}

export const MainContent = ({
	children,
}: MainContentProps): React.ReactNode => {
	return <MainWrapper>{children}</MainWrapper>;
};
