# Deadbeef Pseudo-Random Number Generator

A seed-able pseudo-random number generator (PRNG), ported from
[the public domain work by Robbert Haarman](http://inglorion.net/software/deadbeef_rand/)
into JavaScript.

> ## Introduction
>
> The deadbeef random number generator is a simple pseudorandom number
> generator (PRNG) that generates 32-bit pseudorandom numbers, with heavy
> use of the constant `0xdeadbeef`. It's simple enough that one can learn
> the code by heart, and implement it whenever a simple PRNG is needed.
> The generator is fast and does well on a number of tests [Robbert has]
> put it through, but [Robbert] make[s] no claims about the suitability of
> the generated numbers for any purpose. [...]

## Installation

```
yarn add deadbeef-rand
# or npm install deadbeef-rand
```

### Usage

```js
import DeadbeefRand from 'deadbeef-rand';
/* Or in a CJS environment: */
// const DeadbeefRand = require('deadbeef-rand');

// Seed it with some value.
let deadbeef = new DeadbeefRand(4);

// Generate a pseudo-random number.
let n = deadbeef.rand();
```

### API

#### constructor(seed)

Initialize your `DeadbeefRand` instance with a seeded value. Defaults to `0`.

#### rand()

Returns a random 32-bit integer.

## License

[Zero-Clause BSD](./LICENSE)
