import Iso3166 from './iso3166.ts';

console.log(new Iso3166().from('hu').toIso3()); // HUN
console.log(new Iso3166('us').toIso3()); // USA
console.log(new Iso3166('USA').toIso2()); // US
