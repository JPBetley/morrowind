module.exports = function(build, skill) {
	var skills = build.skills.filter(function(item) {
		return item.key == skill;
	});
	skills.forEach(function(item) {
		item.value = 15;
	});
}