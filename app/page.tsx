import '../styles/globals.css';
import styles from './Page.module.css';
import { Country } from 'Country';
import CountriesView from '../components/CountriesView/CountriesView';

const fetchCountries = async () => {
	const response = await fetch('https://restcountries.com/v3.1/all');
	return response.json();
};

async function page() {
	const countries: Country[] = await fetchCountries();

	const sortedCountries = countries.sort((a, b) => {
		if (a.name.common < b.name.common) {
			return -1;
		}
		if (a.name.common > b.name.common) {
			return 1;
		}
		return 0;
	});

	return (
		<main className={styles.main}>
			<CountriesView countries={sortedCountries} />
		</main>
	);
}

export default page;
