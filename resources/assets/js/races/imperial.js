
function maleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 30;
	build.attributes.speed += 40;
	build.attributes.endurance += 40;
	build.attributes.personality += 50;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 40;
	build.attributes.agility += 30;
	build.attributes.speed += 30;
	build.attributes.endurance += 40;
	build.attributes.personality += 50;
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
	name: 'Imperial'
}