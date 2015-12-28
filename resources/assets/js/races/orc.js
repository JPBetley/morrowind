
function maleAttributes(build) {
	build.attributes.strength += 45;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 50;
	build.attributes.agility += 35;
	build.attributes.speed += 30;
	build.attributes.endurance += 50;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 45;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 45;
	build.attributes.agility += 35;
	build.attributes.speed += 30;
	build.attributes.endurance += 50;
	build.attributes.personality += 25;
	build.attributes.luck += 40;
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