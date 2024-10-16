import styled from 'styled-components';
import { darken, opacify } from 'polished';
import { APPEARANCES, SIZES } from './constants';
import { color, typography } from '../styles/styles';
import { easing } from '../styles/animation';

export const InlinedText = styled.span`
	display: inline-block;
	vertical-align: top;
`;

export const LoadingIndicator = styled.span`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	opacity: 0;
`;

export const StyledButton = styled.button<
	ButtonStylingProps & { children: React.ReactElement }
>`
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	overflow: hidden;
	padding: ${(props) =>
		props.size === SIZES.SMALL
			? '8px 16px'
			: props.size === SIZES.MEDIUM
				? '10px 15px'
				: props.size === SIZES.LARGE
					? '12px 18px'
					: '13px 20px'};
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: all 150ms ease-out;
	transform: translate3d(0, 0, 0);
	will-change: transform;
	vertical-align: top;
	white-space: nowrap;
	user-select: none;
	margin: 0;
	background: transparent;
	font-size: ${(props) =>
		props.size === SIZES.SMALL
			? typography.size.s1
			: props.size === SIZES.MEDIUM
				? typography.size.m1
				: props.size === SIZES.LARGE
					? typography.size.l1
					: typography.size.s2}px;
	font-weight: ${typography.weight.extrabold};
	line-height: 1;

	${(props) =>
		!props.isLoading &&
		`
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }
    `}

	${InlinedText} {
		transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
		transition: transform 700ms ${easing.rubber};
		opacity: 1;
	}

	${LoadingIndicator} {
		transform: translate3d(0, 100%, 0);
	}

	svg {
		height: ${(props) => (props.size === SIZES.SMALL ? '12' : '14')}px;
		width: ${(props) => (props.size === SIZES.SMALL ? '12' : '14')}px;
		vertical-align: top;
		margin-right: ${(props) => (props.size === SIZES.SMALL ? '4' : '6')}px;
		margin-top: ${(props) => (props.size === SIZES.SMALL ? '0' : '-1')}px;
		margin-bottom: ${(props) => (props.size === SIZES.SMALL ? '0' : '-1')}px;

		/* Necessary for js mouse events to not glitch out when hovering on svgs */
		pointer-events: none;
	}

	${(props) =>
		props.disabled &&
		`cursor: not-allowed !important;
      opacity: 0.5 !important;
      &:hover {
        transform: none;
      }
    `}

	${(props) =>
		props.isUnclickable &&
		`
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
		props.isLoading &&
		`
      cursor: progress !important;
      opacity: 0.7;

      ${LoadingIndicator} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${InlinedText} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
		props.containsIcon &&
		`
      svg {
        display: block;
        margin: 0;
        height: ${props.size === SIZES.SMALL ? '14' : '16'}px;
        width: ${props.size === SIZES.SMALL ? '14' : '16'}px;
      }
      padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
    `}

  ${(props) =>
		props.appearance === APPEARANCES.PRIMARY &&
		`
      background: ${color.primary};
      color: ${color.lightest};

      ${
				!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, color.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
			}
    `}

  ${(props) =>
		props.appearance === APPEARANCES.SECONDARY &&
		`
      background: ${color.secondary};
      color: ${color.lightest};

      ${
				!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, color.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
			}
    `}

  ${(props) =>
		props.appearance === APPEARANCES.TERTIARY &&
		`
      background: ${color.tertiary};
      color: ${color.darkest};

      ${
				!props.isLoading &&
				`
          &:hover {
            background: ${darken(0.05, color.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
        `
			}
    `}

  ${(props) =>
		props.appearance === APPEARANCES.OUTLINE &&
		`
      box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;

      ${
				!props.isLoading &&
				`
          &:hover {
            box-shadow: ${opacify(0.3, color.border)} 0 0 0 1px inset;
          }

          &:active {
            background: ${opacify(0.05, color.border)};
            box-shadow: transparent 0 0 0 1px inset;
            color: ${color.darkest};
          }

          &:active:focus:hover {
            ${/* This prevents the semi-transparent border from appearing atop the background */ ''}
            background: ${opacify(0.05, color.border)};
            box-shadow: transparent 0 0 0 1px inset;
          }
        `
			};
    `};

	${(props) =>
		props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
		`
      box-shadow: ${color.primary} 0 0 0 1px inset;
      color: ${color.primary};

      &:hover {
        box-shadow: ${color.primary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.primary};
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.lightest};
      }
    `};

	${(props) =>
		props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
		`
      box-shadow: ${color.secondary} 0 0 0 1px inset;
      color: ${color.secondary};

      &:hover {
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${color.secondary};
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.lightest};
      }
    `};

	${(props) =>
		props.appearance === APPEARANCES.INVERSE_PRIMARY &&
		`
        background: ${color.lightest};
        color: ${color.primary};

        ${
					!props.isLoading &&
					`
            &:hover {
              background: ${color.lightest};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
        `
				}
    `}

	${(props) =>
		props.appearance === APPEARANCES.INVERSE_SECONDARY &&
		`
        background: ${color.lightest};
        color: ${color.secondary};

        ${
					!props.isLoading &&
					`
            &:hover {
              background: ${color.lightest};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
        `
				}
    `}

    ${(props) =>
		props.appearance === APPEARANCES.INVERSE_OUTLINE &&
		`
        box-shadow: ${color.lightest} 0 0 0 1px inset;
        color: ${color.lightest};

        &:hover {
          box-shadow: ${color.lightest} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.lightest};
          box-shadow: ${color.lightest} 0 0 0 1px inset;
          color: ${color.darkest};
        }
    `};

	${(props) =>
		props.appearance === APPEARANCES.INVERSE &&
		`
        background: ${color.tr10};
        color: ${color.lightest};

        ${
					!props.isLoading &&
					`
            &:hover {
              background: ${color.tr10};
              box-shadow: none;
            }
            &:active {
              box-shadow: none;
            }
        `
				}
    `}

	${(props) =>
		props.appearance === APPEARANCES.INVERSE_NO_CHROME &&
		`
        background: transparent;
        color: ${color.lightest};

        ${
					!props.isLoading &&
					`
            &:hover {
              background: transparent;
              box-shadow: none;
            }
            &:active {
              box-shadow: none;
            }
        `
				}
    `}
`;

export const ButtonLink = styled.a``;

export interface ButtonStylingProps {
	isLoading?: boolean;
	isUnclickable?: boolean;
	containsIcon?: boolean;
	disabled?: boolean;
	size?: (typeof SIZES)[keyof typeof SIZES];
	appearance?: (typeof APPEARANCES)[keyof typeof APPEARANCES];
	children?: React.ReactNode;
}

export interface ButtonConfigProps {
	isLink?: boolean;
	ButtonWrapper?:
		| keyof JSX.IntrinsicElements
		| React.ComponentType<React.ReactElement>;
	isDisabled?: boolean;
	isLoading?: boolean;
	loadingText?: React.ReactNode;
}
