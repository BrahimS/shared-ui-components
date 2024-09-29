import React from 'react';
import * as Form from '@radix-ui/react-form';
import styled from 'styled-components';
import { Theme, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './styles.css';

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	justify-content: space-between;
	align-items: center;
`;

export function App(): React.ReactElement {
	return (
		<StyledApp>
			<h1>Hello there</h1>
			<Theme>
				<Button>Hey 👋</Button>
				<Button variant="outline">Hey 👋</Button>
				<Button variant="subtle">Hey 👋</Button>

				<Form.Root className="FormRoot">
					<Form.Field className="FormField" name="email">
						<div
							style={{
								display: 'flex',
								alignItems: 'baseline',
								justifyContent: 'space-between',
							}}
						>
							<Form.Label className="FormLabel">Email</Form.Label>
							<Form.Message className="FormMessage" match="valueMissing">
								Please enter your email
							</Form.Message>
							<Form.Message className="FormMessage" match="typeMismatch">
								Please provide a valid email
							</Form.Message>
						</div>
						<Form.Control asChild>
							<input className="Input" type="email" required />
						</Form.Control>
					</Form.Field>
					<Form.Field className="FormField" name="question">
						<div
							style={{
								display: 'flex',
								alignItems: 'baseline',
								justifyContent: 'space-between',
							}}
						>
							<Form.Label className="FormLabel">Question</Form.Label>
							<Form.Message className="FormMessage" match="valueMissing">
								Please enter a question
							</Form.Message>
						</div>
						<Form.Control asChild>
							<textarea className="Textarea" required />
						</Form.Control>
					</Form.Field>
					<Form.Submit asChild>
						<button className="Button" style={{ marginTop: 10 }}>
							Post question
						</button>
					</Form.Submit>
				</Form.Root>
			</Theme>
		</StyledApp>
	);
}

export default App;
