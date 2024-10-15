import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './index';
import { typography } from '../styles/styles';

describe('Button component', () => {
	it('renders with size styles', () => {
		const { getByText } = render(<Button size="small">Click me</Button>);
		const button = getByText('Click me');
		expect(button).toHaveStyle({
			fontSize: typography.size.s1,
		});
	});

	it('renders with disabled styles', () => {
		const { getByRole } = render(<Button isDisabled></Button>);
		const button = getByRole('button');
		expect(button).toHaveStyle({
			cursor: 'not-allowed',
			opacity: 0.5,
		});
	});

	it('calls onClick handler when clicked', () => {
		const onClick = vi.fn();
		const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
		const button = getByText('Click me');
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
