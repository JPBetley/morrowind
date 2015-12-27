module.exports = {
	apply: function(build) {
		build.stats.agility += 25;
		build.abilities.push('Mooncalf - Fortify Agility 25 pts');
		build.abilities.push('Lover\'s Kiss - Paralyze 60 secs on Target, Damage Fatigue 200 pts on Self');
	},
	name: 'Lover'
}