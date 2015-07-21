'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( sigma )
*	Partially applies scale parameter `sigma` and returns a function for evaluating the probability density function (PDF) for a Rayleigh distribution.
*
* @param {Number} sigma - scale parameter
* @returns {Function} PDF
*/
function partial( sigma ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Rayleigh distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
