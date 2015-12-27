module.exports = {
	apply: function(build) {
		build.stats.intelligence += 2 * build.stats.intelligence;
		build.abilities.push('Wombburn - Spell Absorption 50%, Fortify Maximum Magicka 2.0x INT, Stunted Magicka')
	},
	name: 'Atronach'
}