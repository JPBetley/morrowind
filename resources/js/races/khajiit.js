
function maleAttributes(build) {
	build.attributes.strength += 40;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 30;
	build.attributes.agility += 50;
	build.attributes.speed += 40;
	build.attributes.endurance += 30;
	build.attributes.personality += 40;
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
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Eye of Night - Night Eye Night Eye 50pts for 30sec on Self');
		build.abilities.push('Eye of Fear - Demoralize Humanoid Demoralize Humanoid 100pts for 30sec on Target');
		build.skills.filter(function(skill) {
			return skill.key === 'acrobatics';
		})[0].value += 15;
		build.skills.filter(function(skill) {
			return skill.key === 'athletics';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'hand-to-hand';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'light-armor';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'security';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'shortblade';
		})[0].value += 5;
		build.skills.filter(function(skill) {
			return skill.key === 'sneak';
		})[0].value += 5;
	},
	name: 'Khajiit',
	key: 'khajiit'
}