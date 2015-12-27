module.exports = {
	apply: function(build) {
		build.multipliers.magicka += 0.5;
		build.abilities.push('Fay - Fortify Maximum Magicka 0.5x INT');
	},
	name: 'Mage'
}