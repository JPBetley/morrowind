
function maleAttributes(build) {
	build.attributes.strength += 50;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 40;
	build.attributes.agility += 30;
	build.attributes.speed += 40;
	build.attributes.endurance += 50;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 50;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 50;
	build.attributes.agility += 30;
	build.attributes.speed += 40;
	build.attributes.endurance += 40;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

module.exports = {
	apply: function(build) {
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Thunder Fist - Frost Damage Frost Damage 25pts on Touch');
		build.abilities.push('Woad - Shield Shield 30pts for 60sec on Self');
		build.abilities.push('Resist Shock 50%');
		build.abilities.push('Resist Frost 100%');
		build.resistances.shock += 50;
		build.resistances.frost += 100;
		build.skills.filter(function(skill) {
			return skill.key === 'axe';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'blunt-weapon';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'medium-armor';
		})[0].value += 10;
		build.skills.filter(function(skill) {
			return skill.key === 'heavy-armor';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'long-blade';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'spear';
		})[0].value += 5;
	},
	name: 'Nord',
	key: 'nord'
}