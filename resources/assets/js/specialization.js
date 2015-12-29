module.exports = function(build, specialization) {
	var skills = build.skills.filter(function(skill) {
		return skill.specialization == specialization;
	});
	skills.forEach(function(skill) {
		skill.value += 5;
	});
}