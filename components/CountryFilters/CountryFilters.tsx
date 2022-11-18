'use client';
import Dropdown from '../Dropdown/Dropdown';
import SearchInput from '../SearchInput/SearchInput';
import styles from './CountryFilters.module.css';

interface CountryFiltersProps {
	filters: {
		region: string;
		name: string;
	};
	updateFilter: (key: string, value: any) => void;
}

export default function CountryFilters({
	filters,
	updateFilter,
}: CountryFiltersProps) {
	const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	return (
		<div className={styles.container}>
			<SearchInput
				value={filters.name}
				handleInput={(val) => updateFilter('name', val)}
			/>

			<Dropdown
				options={options}
				value={filters.region}
				onSelect={(val) => updateFilter('region', val)}
				defaultLabel="Filter by Region"
			/>
		</div>
	);
}
