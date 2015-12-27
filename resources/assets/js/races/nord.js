
function maleAttributes(build) {
	build.stats.strength += 50;
	build.stats.intelligence += 30;
	build.stats.willpower += 40;
	build.stats.agility += 30;
	build.stats.speed += 40;
	build.stats.endurance += 50;
	build.stats.personality += 30;
	build.stats.luck += 40;
}

function femaleAttributes(build) {
	build.stats.strength += 50;
	build.stats.intelligence += 30;
	build.stats.willpower += 50;
	build.stats.agility += 30;
	build.stats.speed += 40;
	build.stats.endurance += 40;
	build.stats.personality += 30;
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
	name: 'Nord'
}