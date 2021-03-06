
function maleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 50;
	build.attributes.willpower += 50;
	build.attributes.agility += 30;
	build.attributes.speed += 30;
	build.attributes.endurance += 30;
	build.attributes.personality += 40;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 30;
	build.attributes.intelligence += 50;
	build.attributes.willpower += 50;
	build.attributes.agility += 30;
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
		build.abilities.push('Dragon Skin - Shield Shield 50pts for 60sec on Self');
		build.abilities.push('Resist Magicka 50%');
		build.abilities.push('Fortify Maximum Magicka 0.5x INT');
		build.magickaMultiplier += 0.5;
		build.resistances.magicka += 50;
		build.skills.filter(function(skill) {
			return skill.key === 'conjuration';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'mysticism';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'restoration';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'alchemy';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'alteration';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'illusion';
		})[0].value += 5;
	},
	name: 'Breton',
	key: 'breton'
}