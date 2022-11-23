'use client';

import { useContext } from 'react';
import ThemeContext from '../../../app/ThemeContext';

function LeftArrow() {
	const theme = useContext(ThemeContext);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={20}
			height={20}
		>
			<path
				fill={`${theme === 'light' ? '' : 'white'}`}
				d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
			/>
		</svg>
	);
}

export default LeftArrow;
