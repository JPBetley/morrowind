
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
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Star of the West - Absorb Fatigue Absorb Fatigue 200 pts on target');
		build.abilities.push('Voice of the Emperor - Charm Charm 25 to 50 pts for 15 seconds on target');
	},
	name: 'Imperial',
	key: 'imperial'
}