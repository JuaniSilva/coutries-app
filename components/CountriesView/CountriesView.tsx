'use client';
import CountryCard from '../CountryCard/CountryCard';
import CountryFilters from '../CountryFilters/CountryFilters';
import styles from './CountriesView.module.css';
import { Country } from 'Country';
import { useEffect, useState } from 'react';

interface CountriesViewProps {
	countries: Country[];
}

export default function CountriesView({ countries }: CountriesViewProps) {
	const [filteredCountries, setFilteredCountries] = useState(countries);

	const [filters, setFilters] = useState({
		region: '',
		name: '',
	});

	useEffect(() => {
		const filtered = countries.filter((country) => {
			if (filters.region && country.region !== filters.region)
				return false;
			if (
				filters.name &&
				!country.name.common
					.toLowerCase()
					.includes(filters.name.toLocaleLowerCase())
			)
				return false;
			return true;
		});
		setFilteredCountries(filtered);
	}, [filters]);

	const updateFilter = (key: string, value: any) => {
		setFilters({ ...filters, [key]: value });
	};

	return (
		<div>
			<CountryFilters filters={filters} updateFilter={updateFilter} />
			<div className={styles.countriesContainer}>
				{filteredCountries.map((country) => (
					<CountryCard key={country.name.common} country={country} />
				))}
			</div>
		</div>
	);
}
