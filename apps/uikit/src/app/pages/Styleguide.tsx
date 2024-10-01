import React from 'react';
import { BoxElement } from '@react-monorepo/shared-ui';

const Styleguide = (): React.ReactNode => {
	return (
		<BoxElement
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				justifyItems: 'space-between',
				alignItems: 'flex-start',
				flexWrap: 'wrap',
				width: '33%',
				height: '33%',
			}}
		>
			<div>
				<BoxElement style={{ backgroundColor: 'red' }} $isBig={false} />
				<BoxElement style={{ backgroundColor: 'green' }} />
				<BoxElement style={{ backgroundColor: 'pink' }} />
				<BoxElement style={{ backgroundColor: 'yellow' }} />
			</div>
		</BoxElement>
	);
};

export default Styleguide;
