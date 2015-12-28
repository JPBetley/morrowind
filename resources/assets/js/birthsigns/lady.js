module.exports = {
	apply: function(build) {
		build.attributes.personality += 25;
		build.attributes.endurance += 25;
		build.abilities.push('Lady\'s Favor - Fortify Personality 25 pts');
		build.abilities.push('Lady\'s Grace - Fortify Endurance 25 pts')
	},
	name: 'Lady'
}