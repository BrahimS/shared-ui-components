import { Heading } from './index';
import { render, screen } from '@testing-library/react';

describe('Heading', () => {
	it('should render', () => {
		const element = render(<Heading as="h1">Hello World!</Heading>);
		expect(element).toBeTruthy();
	});
	it('should render with props', () => {
		const element = render(
			<Heading as="h1" color="red">
				Hello World!
			</Heading>,
		);
		expect(element).toBeTruthy();
	});
	it('should display text', () => {
		render(
			<Heading role="heading" as="h1">
				Hello World!
			</Heading>,
		);
		const text = screen.getByRole('heading');
		expect(text).toBeInTheDocument();
	});
});
