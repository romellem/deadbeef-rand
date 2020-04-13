(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		// In the browser, expose our function to `window.DeadbeefRand`
		root.DeadbeefRand = factory();
	}
})(typeof self !== 'undefined' ? self : this, function () {
	/**
	 * Deadbeef pseudo-random number generator.
	 *
	 * @example
	 *
	 *     // Seed it with some value.
	 *     var deadbeef = new DeadbeefRand(4); // chosen by fair dice roll
	 *     // Generate a pseudo-random number.
	 *     var n = deadbeef.rand();
	 *
	 * @param {Number} seed
	 * @link http://inglorion.net/software/deadbeef_rand/DeadbeefRand.js
	 * @link http://inglorion.net/software/deadbeef_rand/
	 */
	function DeadbeefRand(seed) {
		seed = typeof seed === 'undefined' ? 0 : seed;
		var beef = 0xdeadbeef;

		/**
		 * @returns {Number} A 32-bit pseudorandom number.
		 */
		this.rand = function () {
			seed = (seed << 7) ^ (((seed >> 25) & 0x7f) + beef);
			if (seed < 0) {
				seed += 0x100000000;
			}
			beef = (beef << 7) ^ (((beef >> 25) & 0x7f) + 0xdeadbeef);
			return seed;
		};
	}

	return DeadbeefRand;
});
