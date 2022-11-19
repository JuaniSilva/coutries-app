'use client';
import { Country } from 'Country';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CountryView.module.css';

interface CountryViewProps {
	country: Country;
}

function CountryView({ country }: CountryViewProps) {
	const [population, setPopulation] = useState('' + country.population);

	const nativeName =
		country.name.nativeName[
			Object.keys(country.name.nativeName)[
				Object.keys(country.name.nativeName).length - 1
			]
		].common;

	const currencies = Object.entries(country.currencies).map(
		([key, value]) => value.name
	);

	useEffect(() => {
		setPopulation(country.population.toLocaleString());
	}, [country.population]);

	return (
		<section className={styles.section}>
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
						<dt>Currencies:</dt>
						<dd>{currencies.join(', ')}</dd>
					</div>
					<div>
						<dt>Languages</dt>
						<dd>{Object.keys(country.languages).join(', ')}</dd>
					</div>
				</dl>
				<div className={styles.countryBorders}>
					<p>Border Countries:</p>
					<nav>
						<ul>
							{country?.borders &&
								country.borders.map((borderCountry) => (
									<li key={borderCountry}>
										<Link href={borderCountry}>
											{borderCountry}
										</Link>
									</li>
								))}
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
}

export default CountryView;
