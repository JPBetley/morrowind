module.exports = {
	apply: function(build) {
		build.stats.speed += 25;
		build.abilities.push('Charioteer - Fortify Speed 25 pts');
	},
	name: 'Steed'
}