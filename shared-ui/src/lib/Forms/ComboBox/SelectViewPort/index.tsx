import React from 'react';
import { SelectItem } from '@radix-ui/react-select';
import {
	StyledSelectGroup,
	StyledSelectLabel,
	StyledSelectSeparator,
	StyledSelectViewport,
} from '../../../styles';

export const SelectViewPort = () => {
	return (
		<StyledSelectViewport>
			<StyledSelectGroup>
				<StyledSelectLabel>Fruits</StyledSelectLabel>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="blueberry">Blueberry</SelectItem>
				<SelectItem value="grapes">Grapes</SelectItem>
				<SelectItem value="pineapple">Pineapple</SelectItem>
			</StyledSelectGroup>

			<StyledSelectSeparator />

			<StyledSelectGroup>
				<StyledSelectLabel>Vegetables</StyledSelectLabel>
				<SelectItem value="aubergine">Aubergine</SelectItem>
				<SelectItem value="broccoli">Broccoli</SelectItem>
				<SelectItem value="carrot" disabled>
					Carrot
				</SelectItem>
				<SelectItem value="courgette">Courgette</SelectItem>
				<SelectItem value="leek">Leek</SelectItem>
			</StyledSelectGroup>

			<StyledSelectSeparator />

			<StyledSelectGroup>
				<StyledSelectLabel>Meat</StyledSelectLabel>
				<SelectItem value="beef">Beef</SelectItem>
				<SelectItem value="chicken">Chicken</SelectItem>
				<SelectItem value="lamb">Lamb</SelectItem>
				<SelectItem value="pork">Pork</SelectItem>
			</StyledSelectGroup>
		</StyledSelectViewport>
	);
};
