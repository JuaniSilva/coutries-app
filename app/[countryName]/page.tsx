import CountryView from '../../components/CountryView/CountryView';
import { Country } from 'Country';

interface PageProps {
	params: {
		countryName: string;
	};
}

const fetchCountry = async (countryName: string) => {
	const res = await fetch(
		`https://restcountries.com/v3.1/name/${countryName}`
	);
	const country = await res.json();
	return country[0] as Country;
};

async function page({ params }: PageProps) {
	const country = await fetchCountry(params.countryName);

	return (
		<div>
			{params.countryName}
			<CountryView country={country} />
		</div>
	);
}

export default page;
