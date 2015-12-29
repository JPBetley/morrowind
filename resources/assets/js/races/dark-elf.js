
function maleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 40;
	build.attributes.speed += 50;
	build.attributes.endurance += 40;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 40;
	build.attributes.speed += 50;
	build.attributes.endurance += 30;
	build.attributes.personality += 40;
	build.attributes.luck += 40;
}

module.exports = {
	apply: function(build) {
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Ancestor Guardian - Sanctuary Sanctuary 50pts for 60sec on self');
		build.abilities.push('Resist Fire 75%');
		build.resistances.fire += 75;
	},
	name: 'Dark Elf',
	key: 'dark-elf'
}