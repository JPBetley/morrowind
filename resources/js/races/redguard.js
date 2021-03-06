
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
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push("Adrenaline Rush -\
			Fortify Agility 50pts for 60sec on Self,\
			Fortify Endurance 50pts for 60sec on Self,\
			Fortify Speed 50pts for 60sec on Self,\
			Fortify Strength 50pts for 60sec on Self,\
			Fortify Health 25pts for 60sec on Self");
		build.abilities.push('Resist Poison 75%');
		build.abilities.push('Resist Common Disease 75%');
		build.resistances.poison += 75;
		build.resistances.commonDisease += 75;
		build.skills.filter(function(skill) {
			return skill.key === 'long-blade';
		})[0].value += 15;
		build.skills.filter(function(skill) {
			return skill.key === 'athletics';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'medium-armor';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'heavy-armor';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'axe';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'blunt-weapon';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'shortblade';
		})[0].value += 5;
	},
	name: 'Redguard',
	key: 'redguard'
}