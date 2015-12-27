
function maleAttributes(build) {
	build.stats.strength += 40;
	build.stats.intelligence += 40;
	build.stats.willpower += 30;
	build.stats.agility += 30;
	build.stats.speed += 40;
	build.stats.endurance += 40;
	build.stats.personality += 50;
	build.stats.luck += 40;
}

function femaleAttributes(build) {
	build.stats.strength += 40;
	build.stats.intelligence += 40;
	build.stats.willpower += 40;
	build.stats.agility += 30;
	build.stats.speed += 30;
	build.stats.endurance += 40;
	build.stats.personality += 50;
	build.stats.luck += 40;
}

module.exports = {
	apply: function(build) {
		if (build.sex == "Male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
	},
	name: 'Imperial'
}