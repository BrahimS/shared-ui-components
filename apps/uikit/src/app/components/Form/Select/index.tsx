import React from 'react';
import * as Select from '@radix-ui/react-select';

import {
	StyledSelectContent,
	StyledSelectRoot,
	SelectTrigger,
	ScrollButton,
	StyledSelectViewport,
	StyledSelectGroup,
	StyledSelectLabel,
	SelectItem,
} from '@react-monorepo/shared-ui';

export const ComboBoxDemo = () => (
	<StyledSelectRoot>
		<SelectTrigger
			ariaLabel={'Fruits'}
			placeholder={'Select a fruit'}
		></SelectTrigger>
		<Select.Portal>
			<StyledSelectContent>
				<ScrollButton direction="up" />
				<StyledSelectViewport>
					<StyledSelectGroup>
						<StyledSelectLabel>Fruits</StyledSelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</StyledSelectGroup>
				</StyledSelectViewport>

				<ScrollButton direction="down" />
			</StyledSelectContent>
		</Select.Portal>
	</StyledSelectRoot>
);
