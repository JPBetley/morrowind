module.exports = {
	apply: function(build) {
		build.multipliers.magicka += 2;
		build.abilities.push('Wombburn - Spell Absorption 50%, Fortify Maximum Magicka 2.0x INT, Stunted Magicka')
	},
	name: 'Atronach'
}