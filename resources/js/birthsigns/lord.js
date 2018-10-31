module.exports = {
	apply: function(build) {
		build.resistances.fire -= 100;
		build.abilities.push('Blood of the North - Restore Health 2 pts for 30 secs on Self');
		build.abilities.push('Trollkin - Weakness to Fire 100%');
	},
	name: 'Lord'
}