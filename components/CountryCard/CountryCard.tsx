'use client';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import styles from './CountryCard.module.css';
import { useRouter } from 'next/navigation';
import { Country } from 'Country';
import ThemeContext from '../../app/ThemeContext';

interface Props {
	country: Country;
}
export default function CountryCard({ country }: Props) {
	const theme = useContext(ThemeContext);
	const router = useRouter();

	const [population, setPopulation] = useState('' + country.population);

	useEffect(() => {
		setPopulation(country.population.toLocaleString());
	}, [country.population]);

	return (
		<article
			className={`${styles.article} ${styles[theme]}`}
			onClick={() => router.push(country.name.common)}
		>
			<Image
				src={country.flags.png}
				alt="country flag"
				width={265}
				height={162}
			/>
			<section className={styles.section}>
				<p>{country.name.common}</p>
				<dl>
					<div className={styles.dlContainer}>
						<dt>Population:</dt>
						<dd>{population}</dd>
					</div>
					<div className={styles.dlContainer}>
						<dt>Region:</dt>
						<dd>{country.region}</dd>
					</div>
					<div className={styles.dlContainer}>
						<dt>Capital:</dt>
						<dd>{country.capital}</dd>
					</div>
				</dl>
			</section>
		</article>
	);
}
