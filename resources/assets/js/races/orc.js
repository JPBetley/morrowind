
function maleAttributes(build) {
	build.attributes.strength += 45;
	build.attributes.intelligence += 30;
	build.attributes.willpower += 50;
	build.attributes.agility += 35;
	build.attributes.speed += 30;
	build.attributes.endurance += 50;
	build.attributes.personality += 30;
	build.attributes.luck += 40;
}

function femaleAttributes(build) {
	build.attributes.strength += 45;
	build.attributes.intelligence += 40;
	build.attributes.willpower += 45;
	build.attributes.agility += 35;
	build.attributes.speed += 30;
	build.attributes.endurance += 50;
	build.attributes.personality += 25;
	build.attributes.luck += 40;
}

module.exports = {
	apply: function(build) {
		if (build.sex == "male") {
			maleAttributes(build);
		} else {
			femaleAttributes(build);
		}
		build.abilities.push('Resist Magicka 25%');
		build.abilities.push("Berserk -\
			Fortify Health 20pts for 60sec on Self,\
			Fortify Fatigue 200pts for 60sec on Self,\
			Fortify Attack 100pts for 60sec on Self,\
			Drain Agility 100pts for 60sec on Self");
		build.resistances.magicka += 25;
	},
	name: 'Orc',
	key: 'orc'
}