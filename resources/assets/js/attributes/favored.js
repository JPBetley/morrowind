module.exports = function(build, attribute) {
	console.log(attribute);
	build.attributes[attribute] += 10;	
}