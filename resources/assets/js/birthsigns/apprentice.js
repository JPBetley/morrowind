module.exports = {
	apply: function(build) {
		build.multipliers.magicka += 1.5;
		build.resistances.magicka -= 50;
		build.abilities.push('Elfborn - Fortify Maximum Magicka 1.5x INT, Weakness to Magicka 50%');
	},
	name: 'Apprentice'
}