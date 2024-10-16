import React from 'react';
import {
	ButtonConfigProps,
	ButtonLink,
	ButtonStylingProps,
	InlinedText,
	LoadingIndicator,
	StyledButton,
} from './styles';

export const Button = React.forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<
		ButtonConfigProps &
			ButtonStylingProps &
			(JSX.IntrinsicElements['button'] & JSX.IntrinsicElements['a'])
	>
>(
	(
		{
			children,
			isDisabled = false,
			isLoading,
			loadingText = null,
			isLink,
			ButtonWrapper = null,
			appearance = 'tertiary',
			...rest
		},
		ref: React.Ref<HTMLButtonElement>,
	) => {
		if (ButtonWrapper) {
			return (
				<StyledButton
					as={ButtonWrapper}
					disabled={isDisabled}
					isLoading={isLoading}
					appearance={appearance}
					role="button"
					{...rest}
					ref={ref}
				>
					<>
						<InlinedText>{children}</InlinedText>
						{isLoading && (
							<LoadingIndicator>{loadingText || 'Loading...'}</LoadingIndicator>
						)}
					</>
				</StyledButton>
			);
		}
		if (isLink) {
			return (
				<StyledButton
					as={ButtonLink}
					isLoading={isLoading}
					appearance={appearance}
					{...rest}
					ref={ref}
				>
					<>
						<InlinedText>{children}</InlinedText>
						{isLoading && (
							<LoadingIndicator>{loadingText || 'Loading...'}</LoadingIndicator>
						)}
					</>
				</StyledButton>
			);
		}
		return (
			<StyledButton
				disabled={isDisabled}
				isLoading={isLoading}
				appearance={appearance}
				{...rest}
				ref={ref as React.ComponentProps<typeof StyledButton>['ref']}
			>
				<>
					<InlinedText>{children}</InlinedText>
					{isLoading && (
						<LoadingIndicator>{loadingText || 'Loading...'}</LoadingIndicator>
					)}
				</>
			</StyledButton>
		);
	},
);
Button.displayName = 'button';
