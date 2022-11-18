'use client';
import { Country } from 'Country';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './CountryView.module.css';

interface CountryViewProps {
	country: Country;
}

function CountryView({ country }: CountryViewProps) {
	console.log(
		'🚀 ~ file: CountryView.tsx ~ line 12 ~ CountryView ~ country',
		country
	);
	const [population, setPopulation] = useState('' + country.population);

	const nativeName =
		country.name.nativeName[
			Object.keys(country.name.nativeName)[
				Object.keys(country.name.nativeName).length - 1
			]
		].common;

	useEffect(() => {
		setPopulation(country.population.toLocaleString());
	}, [country.population]);

	return (
		<section>
			<Image
				src={country?.flags?.png}
				alt="country flag"
				width={560}
				height={400}
			/>
			<div>
				<h2>{country.name.common}</h2>

				<dl>
					<div>
						<dt>Native Name</dt>
						<dd>{nativeName}</dd>
					</div>
					<div className={styles.dlContainer}>
						<dt>Population:</dt>
						<dd>{population}</dd>
					</div>
					<div className={styles.dlContainer}>
						<dt>Region:</dt>
						<dd>{country.region}</dd>
					</div>
					<div>
						<dt>Sub Region</dt>
						<dd>{country.subregion}</dd>
					</div>
					<div className={styles.dlContainer}>
						<dt>Capital:</dt>
						<dd>{country.capital}</dd>
					</div>
					<div>
						<dt>Top Level Domain</dt>
						<dd>{country.tld}</dd>
					</div>
					<div>
						<dt>Currencies</dt>
						<dd>{country.currencies.name}</dd>
					</div>
					<div>
						<dt>Languages</dt>
						<dd>{Object.keys(country.languages).join(', ')}</dd>
					</div>
				</dl>
			</div>
		</section>
	);
}

export default CountryView;
