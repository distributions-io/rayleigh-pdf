'use strict';

// FUNCTIONS //

var exp = Math.exp,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( sigma )
*	Partially applies scale parameter `sigma` and returns a function for evaluating the probability density function (PDF) for a Rayleigh distribution.
*
* @param {Number} sigma - scale parameter
* @returns {Function} PDF
*/
function partial( sigma ) {
	var s2 = pow( sigma, 2 );
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Rayleigh distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		if ( x < 0 ) {
			return 0;
		}
		return (1/s2) * x * exp( -pow( x, 2 ) / ( 2 * s2 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
