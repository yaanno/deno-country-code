import data from './data/data.json' assert { type: 'json' };

class Iso3166 {
	private store: string;

	constructor(code?: string) {
		this.store = code || ''
	}

	private isWellFormed(iso: string): boolean {
		return typeof iso === 'string' && iso.length > 1 && iso.length < 4;
	}

	from(str: string) {
		if (this.isWellFormed(str)) {
			this.store = str.toUpperCase();
		}
		return this;
	}

	toIso2(iso3?: string): string {
		const input = iso3 || this.store;
		if (this.isWellFormed(input) && input.length === 3) {
			const item = data.find(i => i.iso3 === input);
			return item && item.iso2 ? item.iso2 : '';
		} else {
			return input;
		}
	}

	toIso3(iso2?: string): string {
		const input = iso2 || this.store;
		if (this.isWellFormed(input) && input.length === 2) {
			const item = data.find(i => i.iso2 === input);
			return item && item.iso3 ? item.iso3 : '';
		} else {
			return input;
		}
	}

}

export default Iso3166;
