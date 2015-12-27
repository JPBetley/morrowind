
function maleAttributes(build) {
	build.stats.strength += 45;
	build.stats.intelligence += 30;
	build.stats.willpower += 50;
	build.stats.agility += 35;
	build.stats.speed += 30;
	build.stats.endurance += 50;
	build.stats.personality += 30;
	build.stats.luck += 40;
}

function femaleAttributes(build) {
	build.stats.strength += 45;
	build.stats.intelligence += 40;
	build.stats.willpower += 45;
	build.stats.agility += 35;
	build.stats.speed += 30;
	build.stats.endurance += 50;
	build.stats.personality += 25;
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
	name: 'Orc'
}