module.exports = function(build) {
	var attrs = build.attributes;
	build.stats.health = (attrs.endurance + attrs.strength) / 2;
	build.stats.magicka = attrs.intelligence * build.magickaMultiplier;
	build.stats.fatigue = attrs.strength + attrs.willpower + attrs.agility + attrs.endurance;
}