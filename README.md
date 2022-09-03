# deno-country-code

A fun little experiment with [Deno](https://deno.land/) and Typescript slightly based on the [iso3166-1](https://github.com/moimikey/iso3166-1) library - Hey, Mike :)

The original idea was to compile the code to Wasm and awe the exec speed in the browser (and other Wasm capable environments). Alas, the [Assemblyscript](https://www.assemblyscript.org/) compiler did not like my code so far.

The code won't work out of the box with Node.js as it needs a bunch of libraries and setup and eff that, Deno does that by default (and fast!).

See `index.ts` for examples.

Run the converter (strip down the json to iso codes only):

```sh
deno run --allow-write convert.ts
```

Run the examples:

```sh
deno run index.ts
```
