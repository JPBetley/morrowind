module.exports = {
	apply: function(build) {
		build.attributes.speed += 25;
		build.abilities.push('Charioteer - Fortify Speed 25 pts');
	},
	name: 'Steed'
}