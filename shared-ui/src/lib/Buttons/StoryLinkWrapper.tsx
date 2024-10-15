import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';

// This is allows us to test whether the link works via the actions addon
const fireClickAction = action('onLinkClick');

interface StoryLinkWrapperProps {
	to: string;
}

export const StoryLinkWrapper = ({
	children,
	href,
	onClick,
	to,
	...rest
}: StoryLinkWrapperProps & ComponentProps<'a'>) => {
	const modifiedOnClick: React.DOMAttributes<HTMLAnchorElement>['onClick'] = (
		event,
	) => {
		event.preventDefault();
		onClick && onClick(event);
		fireClickAction(href || to);
	};

	return (
		<a
			data-storyLinkWrapper="true"
			href={href || to}
			onClick={modifiedOnClick}
			{...rest}
		>
			{children}
		</a>
	);
};
