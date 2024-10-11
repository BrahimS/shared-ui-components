import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../styles';
import { theme } from '../styles/theme';

describe('Button component', () => {
	it('renders with size styles', () => {
		const { getByText } = render(<Button size="small">Click me</Button>);
		const button = getByText('Click me');
		expect(button).toHaveStyle({
			padding: '6px 8px',
		});
	});

	it('renders with disabled styles', () => {
		const { getByText } = render(<Button disabled>Click me</Button>);
		const button = getByText('Click me');
		expect(button).toHaveStyle({
			opacity: 0.5,
			cursor: 'not-allowed',
			backgroundColor: theme.colors.grey,
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
