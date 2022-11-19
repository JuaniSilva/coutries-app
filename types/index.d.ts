declare module 'Country' {
	export interface Country {
		name: {
			common: string;
			nativeName: {
				[key: string]: {
					official: string;
					common: string;
				};
			};
		};
		subregion: string;
		borders: string[];
		flags: {
			png: string;
			svg: string;
		};
		population: number;
		region: string;
		capital: string;
		tld: string[];
		currencies: {
			[key: string]: {
				name: string;
				symbol: string;
			};
		};
		languages: {
			[key: string]: string;
		};
	}
}
