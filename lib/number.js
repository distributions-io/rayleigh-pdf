'use strict';

// FUNCTIONS //

var exp = Math.exp,
	pow = Math.pow;


// PDF //

/**
* FUNCTION: pdf( x, sigma )
*	Evaluates the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} sigma - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, sigma ) {
	var s2 = pow( sigma, 2 );
	if ( x < 0 ) {
		return 0;
	}
	return (1/s2) * x * exp( -pow( x, 2 ) / ( 2 * s2 ) );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
