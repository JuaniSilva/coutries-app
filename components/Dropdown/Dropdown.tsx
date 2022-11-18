'use client';

import { useEffect, useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
	options: string[];
	value: string;
	onSelect: (option: string) => void;
	defaultLabel: string;
}
function Dropdown({
	value,
	options,
	onSelect,
	defaultLabel = '',
}: DropdownProps) {
	const [selectedItem, setSelectedItem] = useState(value || defaultLabel);
	const [isOpen, setIsOpen] = useState(false);

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const unSelect = () => {
		setSelectedItem(defaultLabel);
		onSelect('');
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', closeDropdown);
		} else {
			document.removeEventListener('click', closeDropdown);
		}
		return () => {
			document.removeEventListener('click', closeDropdown);
		};
	}, [isOpen]);

	useEffect(() => {
		if (options.includes(selectedItem)) onSelect(selectedItem);
	}, [selectedItem]);

	return (
		<div className={styles.dropdown}>
			<button
				className={isOpen ? 'is-open' : ''}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedItem}
			</button>
			{isOpen && (
				<menu>
					{options.map((option, index) => (
						<li key={index}>
							<button onClick={() => setSelectedItem(option)}>
								{option}
							</button>
						</li>
					))}
					<li>
						<button onClick={() => unSelect()}>
							Remove option
						</button>
					</li>
				</menu>
			)}
		</div>
	);
}

export default Dropdown;
