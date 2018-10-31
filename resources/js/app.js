var Vue = require('vue');
var specialization = require('./specialization');
var favored = require('./attributes/favored');
var major = require('./skills/major');
var minor = require('./skills/minor');
var stats = require('./stats');
var uri = require('urijs');

Vue.config.debug = true

Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
	el: '#app',

	data: {
		saved: false,
		
		sex: '',
		specialization: '',

		majorSkills: [{name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}],
		minorSkills: [{name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}, {name: '', value: ''}],
		skills: require('./skills/all'),

		favoredAttributes: ['', ''],
		attributes: require('./attributes/all'),

		birthsign: require('./birthsigns/default'),
		birthsigns: require('./birthsigns/all'),

		race: require('./races/default'),
		races: require('./races/all'),
	},

	mounted: function () {
		var self = this,
			url = uri(window.location.href),
			state = url.query(true);

		function setArray(current, loaded, maxSize) {
			var result = [];
			if (Array.isArray(loaded)) {
				result = loaded;
			} else if (loaded !== undefined) {
				result = [loaded];
			}

			while (result.length < maxSize) {
				result.push('');
			}
			return result;
		}

		this.sex = state.sex;
		this.specialization = state.specialization;

		this.majorSkills = setArray(this.majorSkills, state.major, 5);
		this.minorSkills = setArray(this.minorSkills, state.minor, 5);
		this.favoredAttributes = setArray(this.favoredAttributes, state.favored, 2);
		if (state.race === undefined) {
			this.race = require('./races/default');
		} else {
			this.race = this.races.filter(function(value) {
				return value.key == state.race;
			})[0]; 
		}

		if (state.birthsign === undefined) {
			this.birthsign = require('./birthsigns/default');
		} else {
			this.birthsign = this.birthsigns.filter(function(value) {
				return value.name == state.birthsign;
			})[0]; 
		}
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
		state: function() {
			function notBlank(value) { return value !== ''; }
			return {
				sex: this.sex,
				race: this.race.key,
				birthsign: this.birthsign.name,
				specialization: this.specialization,
				favored: this.favoredAttributes.filter(notBlank),
				major: this.majorSkills.filter(notBlank),
				minor: this.minorSkills.filter(notBlank),
			};
		},
		url: function() {
			var url = uri(window.location.href);
			url.search(this.state);
			return url.toString();
		}
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
		},
		save: function() {
			window.history.pushState('character', document.title, this.url);
			this.saved = true;
		}
	}
});