Probability Density Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Rayleigh](https://en.wikipedia.org/wiki/Rayleigh_distribution) distribution probability density function (PDF).

The [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) (PDF) for a [Rayleigh](https://en.wikipedia.org/wiki/Rayleigh_distribution) random variable is

<div class="equation" align="center" data-raw-text="f(x;\sigma) = \begin{cases} \frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)} &amp; \text{ for } x \ge 0 \\
0 & \text{ otherwise } \end{cases}" data-equation="eq:pdf_function">
	<img src="https://cdn.rawgit.com/distributions-io/rayleigh-pdf/97dabc8f55ecc2e50ffa8143a259d2c6fe551109/docs/img/eqn.svg" alt="Probability density function (PDF) for a Rayleigh distribution.">
	<br>
</div>

where `sigma` is the scale parameter.

## Installation

``` bash
$ npm install distributions-rayleigh-pdf
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var pdf = require( 'distributions-rayleigh-pdf' );
```

#### pdf( x[, options] )

Evaluates the [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) (PDF) for the [Rayleigh](https://en.wikipedia.org/wiki/Rayleigh_distribution) distribution. `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	mat,
	out,
	x,
	i;

out = pdf( 1 );
// returns ~0.607

out = pdf( -1 );
// returns 0

x = [ 0, 0.5, 1, 1.5, 2, 2.5 ];
out = pdf( x );
// returns [ 0, ~0.441, ~0.607, ~0.487, ~0.271, ~0.11 ]

x = new Int8Array( x );
out = pdf( x );
// returns Float64Array( [0,0,~0.607,~0.607,~0.271,~0.271] )

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i * 0.5;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[ 0  0.5
	  1  1.5
	  2  2.5 ]
*/

out = pdf( mat );
/*
	[ 0     ~0.441
	 ~0.607 ~0.487
	 ~0.271 ~0.11 ]
*/
```

The function accepts the following `options`:

*	__sigma__: scale parameter. Default: `1`.
* 	__accessor__: accessor `function` for accessing `array` values.
* 	__dtype__: output [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.
*	__copy__: `boolean` indicating if the `function` should return a new data structure. Default: `true`.
*	__path__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path.
*	__sep__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path separator. Default: `'.'`.

A [Rayleigh](https://en.wikipedia.org/wiki/Rayleigh_distribution) distribution is a function of one parameter: `sigma`(scale parameter). By default, `sigma` is equal to `1`. To adjust it, set the corresponding option.

``` javascript
var x = [ 0, 0.5, 1, 1.5, 2, 2.5 ];

var out = pdf( x, {
	'sigma': 3
});
// returns [ 0, ~0.0548, ~0.105, ~0.147, ~0.178, ~0.196 ]
```

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	[0,0],
	[1,0.5],
	[2,1],
	[3,1.5],
	[4,2],
	[5,2.5]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = pdf( data, {
	'accessor': getValue
});
// returns [ 0, ~0.441, ~0.607, ~0.487, ~0.271, ~0.11 ]
```


To [deepset](https://github.com/kgryte/utils-deep-set) an object `array`, provide a key path and, optionally, a key path separator.

``` javascript
var data = [
	{'x':[0,0]},
	{'x':[1,0.5]},
	{'x':[2,1]},
	{'x':[3,1.5]},
	{'x':[4,2]},
	{'x':[5,2.5]}
];

var out = pdf( data, {
	'path': 'x/1',
	'sep': '/'
});
/*
	[
		{'x':[0,0]},
		{'x':[1,~0.441]},
		{'x':[2,~0.607]},
		{'x':[3,~0.487]},
		{'x':[4,~0.271]},
		{'x':[5,~0.11]}
	]
*/

var bool = ( data === out );
// returns true
```

By default, when provided a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), the output data structure is `float64` in order to preserve precision. To specify a different data type, set the `dtype` option (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types).

``` javascript
var x, out;

x = new Int8Array( [0,1,2,3,4] );

out = pdf( x, {
	'dtype': 'int32'
});
// returns Int32Array( [0,0,0,0,0] )

// Works for plain arrays, as well...
out = pdf( [0,0.5,1,1.5,2], {
	'dtype': 'uint8'
});
// returns Uint8Array( [0,0,0,0,0] )
```

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var bool,
	mat,
	out,
	x,
	i;

x = [ 0, 0.5, 1, 1.5, 2 ];

out = pdf( x, {
	'copy': false
});
// returns [ 0, ~0.441, ~0.607, ~0.487, ~0.271, ~0.11 ]

bool = ( x === out );
// returns true

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i * 0.5;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[ 0  0.5
	  1  1.5
	  2  2.5 ]
*/

out = pdf( mat, {
	'copy': false
});
/*
	[ 0     ~0.441
	 ~0.607 ~0.487
	 ~0.271 ~0.11 ]
*/

bool = ( mat === out );
// returns true
```


## Notes

*	If an element is __not__ a numeric value, the evaluated [PDF](https://en.wikipedia.org/wiki/Rayleigh_distribution) is `NaN`.

	``` javascript
	var data, out;

	out = pdf( null );
	// returns NaN

	out = pdf( true );
	// returns NaN

	out = pdf( {'a':'b'} );
	// returns NaN

	out = pdf( [ true, null, [] ] );
	// returns [ NaN, NaN, NaN ]

	function getValue( d, i ) {
		return d.x;
	}
	data = [
		{'x':true},
		{'x':[]},
		{'x':{}},
		{'x':null}
	];

	out = pdf( data, {
		'accessor': getValue
	});
	// returns [ NaN, NaN, NaN, NaN ]

	out = pdf( data, {
		'path': 'x'
	});
	/*
		[
			{'x':NaN},
			{'x':NaN},
			{'x':NaN,
			{'x':NaN}
		]
	*/
	```

*	Be careful when providing a data structure which contains non-numeric elements and specifying an `integer` output data type, as `NaN` values are cast to `0`.

	``` javascript
	var out = pdf( [ true, null, [] ], {
		'dtype': 'int8'
	});
	// returns Int8Array( [0,0,0] );
	```


## Examples

``` javascript
var pdf = require( 'distributions-rayleigh-pdf' ),
	matrix = require( 'dstructs-matrix' );

var data,
	mat,
	out,
	tmp,
	i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i * 0.5;
}
out = pdf( data );

// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
out = pdf( data, {
	'accessor': getValue
});

// Deep set arrays...
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': [ i, data[ i ].x ]
	};
}
out = pdf( data, {
	'path': 'x/1',
	'sep': '/'
});

// Typed arrays...
data = new Float32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i * 0.5;
}
out = pdf( data );

// Matrices...
mat = matrix( data, [5,2], 'float32' );
out = pdf( mat );

// Matrices (custom output data type)...
out = pdf( mat, {
	'dtype': 'uint8'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-rayleigh-pdf.svg
[npm-url]: https://npmjs.org/package/distributions-rayleigh-pdf

[travis-image]: http://img.shields.io/travis/distributions-io/rayleigh-pdf/master.svg
[travis-url]: https://travis-ci.org/distributions-io/rayleigh-pdf

[codecov-image]: https://img.shields.io/codecov/c/github/distributions-io/rayleigh-pdf/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/rayleigh-pdf?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/rayleigh-pdf.svg
[dependencies-url]: https://david-dm.org/distributions-io/rayleigh-pdf

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/rayleigh-pdf.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/rayleigh-pdf

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/rayleigh-pdf.svg
[github-issues-url]: https://github.com/distributions-io/rayleigh-pdf/issues
