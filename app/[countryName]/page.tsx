import '../../styles/globals.css';
import styles from './Page.module.css';
import CountryView from '../../components/CountryView/CountryView';
import { Country } from 'Country';
import Link from 'next/link';
import LeftArrow from '../../components/Icons/LeftArrow/LeftArrow';

interface PageProps {
	params: {
		countryName: string;
	};
}

const fetchCountry = async (countryName: string) => {
	const res = await fetch(
		`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
	);
	const country = await res.json();

	// for some reason, the API returns an array with the country lmao
	return country[0] as Country;
};

const fetchCountryByCode = async (code: string) => {
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	const country = await res.json();

	// for some reason, the API returns an array with the country lmao
	return country[0] as Country;
};

const fetchBorderCountries = async (borderCountries: string[]) => {
	if (!borderCountries) return null;

	let countriesPromises = [];
	for (let countryCode of borderCountries) {
		countriesPromises.push(fetchCountryByCode(countryCode));
	}
	const countries = await Promise.all(countriesPromises);

	return countries;
};

async function page({ params }: PageProps) {
	const country = await fetchCountry(params.countryName);
	const countryBorders = (await fetchBorderCountries(country.borders)) ?? [];

	let parsedCountry = {
		...country,
		borders: countryBorders.map((country) => country?.name?.common),
	};

	return (
		<main className={styles.main}>
			<Link href="/" className="button-link">
				<LeftArrow />
				<p>Back</p>
			</Link>
			<CountryView country={parsedCountry} />
		</main>
	);
}

export default page;
