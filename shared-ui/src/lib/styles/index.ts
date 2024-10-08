import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Menubar from '@radix-ui/react-menubar';
import { Primitive } from '@radix-ui/react-primitive';
import { FlexBox } from '../Grid/FlexBox';
import { theme } from './theme';

export interface ContainerWrapperProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	padding?: keyof typeof theme.spacing;
	style?: React.CSSProperties;
}
export interface HeadingProps {
	children: React.ReactNode;
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: string;
	style?: React.CSSProperties;
	role?: string;
}
export interface FlexBoxProps {
	children: React.ReactNode;
	display?: 'none' | 'inline' | 'inline-block' | 'block' | 'flex';
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	justify?: 'start' | 'center' | 'end' | 'space-between';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
	style?: React.CSSProperties;
}
export interface ButtonProps
	extends React.ComponentProps<typeof Primitive.button> {
	size?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'secondary' | 'danger' | 'darkPrimary';
	radius?: 'none' | 'small' | 'medium' | 'large';
	variant?: 'solid' | 'outlined' | 'ghost';
	disabled?: boolean;
	role?: string;
}

export const mediaQueries = {
	mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
	tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
	laptop: `@media (max-width: ${theme.breakpoints.laptop})`,
	desktop: `@media (max-width: ${theme.breakpoints.desktop})`,
	tv: `@media (max-width: ${theme.breakpoints.tv})`,
};
export const StyledHeading = styled.h1<{ as: string }>`
	font-weight: bold;
	margin-bottom: 1rem;
	text-align: left;

	${mediaQueries.mobile} {
		margin-bottom: ${theme.spacing.md};
	}

	${(props) =>
		props.as === 'h1' &&
		`
    font-size: ${theme.typography.fontSize.h1};
		${mediaQueries.tablet} {
			font-size: 2.5rem;
		}
    ${mediaQueries.mobile} {
      font-size: 2rem;
    }
  `}

	${(props) =>
		props.as === 'h2' &&
		`
    font-size:  ${theme.typography.fontSize.h2};
		${mediaQueries.tablet} {
			font-size: 2.2rem;
		}
    ${mediaQueries.mobile} {
      font-size: 1.8rem;
    }

  `}
	${(props) =>
		props.as === 'h3' &&
		`
    font-size:  ${theme.typography.fontSize.h3};
		${mediaQueries.tablet} {
			font-size: 1.8rem;
		}
    ${mediaQueries.mobile} {
      font-size: 1.6rem;
    }
  `}
	${(props) =>
		props.as === 'h4' &&
		`
    font-size:  ${theme.typography.fontSize.h4};
		${mediaQueries.tablet} {
			font-size: 1.4rem;
		}
    ${mediaQueries.mobile} {
      font-size: 1.3rem;
    }
  `}
	${(props) =>
		props.as === 'h5' &&
		`
    font-size:  ${theme.typography.fontSize.h5};
		${mediaQueries.tablet} {
			font-size: 1rem;
		}
    ${mediaQueries.mobile} {
      font-size: 0.9rem;
    }
  `}
`;

export const TagText = styled('h2')`
	opacity: 0.2;
	color: ${theme.colors.grey};
	font-size: ${theme.typography.fontSize.h2};
`;
export const TagTextSmall = styled('p')`
	opacity: 0.2;
	color: ${theme.colors.grey};
	font-size: ${theme.typography.fontSize.h4};
`;

export const ParagraphContainer = styled(FlexBox)`
	padding-top: ${theme.spacing.md};
`;

export const ContainerWrapper = styled.div<ContainerWrapperProps>`
	margin: 0 auto;
	width: 100%;
	padding-left: ${theme.spacing.md};
	padding-right: ${theme.spacing.md};
	box-sizing: border-box;
	${({ theme, size }) => {
		switch (size) {
			case 'sm':
				return `max-width: ${theme.sizes.containerSM};`;
			case 'md':
				return `max-width: ${theme.sizes.containerMD};`;
			case 'lg':
				return `max-width: ${theme.sizes.containerLG};`;
			case 'xl':
				return `max-width: ${theme.sizes.containerXL};`;
			case 'full':
				return `max-width: ${theme.sizes.containerFULL};`;
			default:
				return ``;
		}
	}}
`;

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: ${theme.colors.white};
	min-height: 80px;
	width: 100vw;
	box-shadow: ${theme.shadows.medium};
	color: ${theme.colors.primary};
`;

export const MainWrapper = styled.main`
	display: flex;
	justify-content: space-between;
	justify-items: flex-start;
	align-items: flex-start;
	padding: 3rem 1rem;
	height: calc(100vh - 116px);
	color: ${theme.colors.primary};
	background-color: transparent;
	z-index: -1;
`;

export const MenubarRootWrapper = styled(Menubar.Root)`
	display: flex;
	background-color: white;
	padding: 4px;
	border-radius: 6px;
`;

export const MenubarTriggerWrapper = styled(Menubar.Trigger)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	all: unset;
	padding: 8px 12px;
	outline: none;
	user-select: none;
	font-weight: 500;
	line-height: 1;
	border-radius: 4px;
	color: ${theme.colors.primary};
	font-size: 14px;
	gap: 3px;
	color: ${theme.colors.text.primary};

	&:hover {
		background-color: ${({ theme }) => theme.colors.yellow};
	}
`;

export const Button = styled.button<ButtonProps>`
	/* Base styles */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px;
	margin: 0 ${({ theme }) => theme.spacing.xs};
	background-color: ${theme.colors.primary};
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition:
		background-color 0.3s,
		transform 0.1s;
	font-weight: 500;
	letter-spacing: 0.2px;
	font-size: 12px;

	${mediaQueries.mobile} {
		font-size: 16px;
	}

	${mediaQueries.tablet} {
		font-size: 18px;
	}

	&:hover {
		background-color: ${theme.colors.darkPrimary};
	}

	&:active {
		transform: translateY(1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}

	&[data-disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Variants */
	${({ variant }) => {
		switch (variant) {
			case 'outlined':
				return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
			case 'ghost':
				return `
          background-color: transparent;
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
			default:
				return ``;
		}
	}}

	/* Sizes */
  ${({ size }) => {
		switch (size) {
			case 'small':
				return `
          padding: 6px 8px;
        `;
			case 'medium':
				return `
          padding: 12px 16px;
        `;
			case 'large':
				return `
          padding: 16px 24px;
        `;
			default:
				return ``;
		}
	}}
  /* Disabled */
  ${({ disabled }) => {
		if (disabled) {
			return `
        opacity: 0.5;
        cursor: not-allowed;
        background-color: ${theme.colors.grey};

        &:hover {
          background-color: ${theme.colors.grey};
          color: white;
        }
      `;
		} else {
			return ``;
		}
	}}
`;

export const MenuLinkWrapper = styled(Link)`
	color: inherit;
	text-decoration: none;
`;
export const LogoWrapper = styled.div`
	display: flex;
`;
export const BigSquare = styled.div`
	height: ${theme.logo.size.large};
	width: ${theme.logo.size.large};
	border: ${theme.logo.border.type};
	border-color: ${theme.logo.border.color};
	border-radius: ${theme.logo.border.radius};
	transform: ${theme.logo.rotation.large};
	background: ${theme.logo.color};
`;

export const SmallSquare = styled.div`
	height: 30px;
	width: 30px;
	border: ${theme.logo.border.type} ${theme.logo.border.width};
	border-color: ${theme.logo.border.color};
	border-radius: ${theme.logo.border.radius};
	transform: ${theme.logo.rotation.small} ${theme.logo.translate};
	background: ${theme.logo.color};
`;

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: flex-end;
	justify-items: center;
	align-items: center;
	background-color: ${theme.colors.yellow};
	max-height: 60px;
	width: 100%;
	position: fixed;
	bottom: 0;
	width: '100%';
	padding: ${theme.spacing.md} 0;
`;
