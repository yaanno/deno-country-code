import data from './data/country-codes_json.json' assert { type: 'json' };

const out = data
	.map(item => {
		return {
			iso2: item['ISO3166-1-Alpha-2'],
			iso3: item['ISO3166-1-Alpha-3']
		}
	});

Deno.writeTextFileSync('./data/data.json', JSON.stringify(out));
