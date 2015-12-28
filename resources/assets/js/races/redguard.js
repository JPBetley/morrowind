
function maleAttributes(build) {
	build.attributes.strength += 50;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 30;
	build.attributes.agility += 40;
	build.attributes.speed += 40;
	build.attributes.endurance += 50;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 30;
	build.attributes.agility += 40;
	build.attributes.speed += 40;
	build.attributes.endurance += 50;
	build.attributes.personality += 40;
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
	name: 'Redguard'
}