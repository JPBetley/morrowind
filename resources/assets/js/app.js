var Vue = require('vue');
var specialization = require('./specialization');
var favored = require('./attributes/favored');
var major = require('./skills/major');
var minor = require('./skills/minor');
var stats = require('./stats');

Vue.config.debug = true

new Vue({
	el: '#app',

	data: {
		sex: '',
		specialization: '',

		majorSkills: ['', '', '', '', ''],
		minorSkills: ['', '', '', '', ''],
		skills: require('./skills/all'),

		favoredAttributes: ['', ''],
		attributes: require('./attributes/all'),

		birthsign: require('./birthsigns/default'),
		birthsigns: require('./birthsigns/all'),

		race: require('./races/default'),
		races: require('./races/all'),
	},

	computed: {
		build: function () {
			var build = require('./default-build')();
			build.sex = this.sex;

			this.race.apply(build);
			this.majorSkills.forEach(function(skill) { major(build, skill) });
			this.minorSkills.forEach(function(skill) { minor(build, skill) });
			this.birthsign.apply(build);
			specialization(build, this.specialization);
			this.favoredAttributes.forEach(function(attr) { favored(build, attr) });
			stats(build);

			return build;
		},
	},

	methods: { 
		reset: function() {
			this.sex = '';
			this.specialization = '';
			this.majorSkills = ['', '', '', '', ''];
			this.minorSkills = ['', '', '', '', ''];
			this.favoredAttributes = ['', ''];
			this.race = require('./races/default');
			this.birthsign = require('./birthsigns/default');
		}
	}
});