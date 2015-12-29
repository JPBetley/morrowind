
function maleAttributes(build) {
	build.attributes.strength += 30;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 50;
	build.attributes.speed += 50;
	build.attributes.endurance += 30;
	build.attributes.personality += 40;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 30;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 50;
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
		build.abilities.push('Beast Tongue - Command Creature Command Creature 5pts for 600sec');
		build.abilities.push('Resist Common Disease: 75%');
		build.resistances.commonDisease += 75;
		build.skills.filter(function(skill) {
			return skill.key === 'marksman';
		})[0].value += 15;
		build.skills.filter(function(skill) {
			return skill.key === 'sneak';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'light-armor';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'alchemy';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'acrobatics';
		})[0].value += 5;
	},
	name: 'Wood Elf',
	key: 'wood-elf'
}