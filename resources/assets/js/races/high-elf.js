
function maleAttributes(build) {
	build.attributes.strength += 30;
	build.attributes.intelligence += 50;
	build.attributes.willpower += 40;
	build.attributes.agility += 40;
	build.attributes.speed += 30;
	build.attributes.endurance += 40;
	build.attributes.personality += 40;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 30;
	build.attributes.intelligence += 50;
	build.attributes.willpower += 40;
	build.attributes.agility += 40;
	build.attributes.speed += 40;
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
		build.abilities.push('Resist Common Disease: 75%');
		build.abilities.push('Weakness to Shock: 25%');
		build.abilities.push('Weakness to Frost: 25%');
		build.abilities.push('Weakness to Fire: 50%');
		build.abilities.push('Weakness to Magicka: 50%');
		build.abilities.push('Fortify Maximum Magicka 1.5x INT');
		build.resistances.commonDisease += 75;
		build.resistances.shock += 25;
		build.resistances.frost += 25;
		build.resistances.fire += 50;
		build.resistances.magicka += 50;
		build.magickaMultiplier += 1.5;
	},
	name: 'High Elf',
	key: 'high-elf'
}