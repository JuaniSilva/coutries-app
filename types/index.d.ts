declare module 'Country' {
	export interface Country {
		name: {
			common: string;
		};
		flags: {
			png: string;
			svg: string;
		};
		population: number;
		region: string;
		capital: string;
	}
}
