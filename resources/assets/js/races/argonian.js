
function maleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 50;
	build.attributes.speed += 50;
	build.attributes.endurance += 30;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 50;
	build.attributes.willpower += 40;
	build.attributes.agility += 40;
	build.attributes.speed += 40;
	build.attributes.endurance += 30;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

module.exports = {
	apply: function(build) {
		if (build.sex == "Male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Water Breathing for 120sec on Self, Cost: 5pts');
		build.abilities.push('Resist Poison 100%');
		build.abilities.push('Resist Common Disease 75%');
		build.resistances.poison += 100;
		build.resistances.commonDisease += 75;
	},
	name: 'Argonian'
}