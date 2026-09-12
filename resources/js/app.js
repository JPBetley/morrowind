import Vue from 'vue';
import specialization from './specialization';
import favored from './attributes/favored';
import major from './skills/major';
import minor from './skills/minor';
import stats from './stats';
import uri from 'urijs';
import allSkills from './skills/all';
import allAttributes from './attributes/all';
import defaultBirthsign from './birthsigns/default';
import allBirthsigns from './birthsigns/all';
import defaultRace from './races/default';
import allRaces from './races/all';
import defaultBuild from './default-build';

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

		majorSkills: [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
		minorSkills: [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
		skills: allSkills,

		favoredAttributes: [{value: ''}, {value: ''}],
		attributes: allAttributes,

		birthsign: defaultBirthsign,
		birthsigns: allBirthsigns,

		race: defaultRace,
		races: allRaces,
	},

	mounted: function () {
		var self = this,
			url = uri(window.location.href),
			state = url.query(true);

		function setArray(current, loaded, maxSize) {
			var result = [];
			if (Array.isArray(loaded)) {
				result = loaded.map(x => { return { value: x } });
			} else if (loaded !== undefined) {
				result = [{value: loaded}];
			}

			while (result.length < maxSize) {
				result.push({value: ''});
			}
			return result;
		}

		this.sex = state.sex;
		this.specialization = state.specialization;

		this.majorSkills = setArray(this.majorSkills, state.major, 5);
		this.minorSkills = setArray(this.minorSkills, state.minor, 5);
		this.favoredAttributes = setArray(this.favoredAttributes, state.favored, 2);
		if (state.race === undefined) {
			this.race = defaultRace;
		} else {
			this.race = this.races.filter(function(value) {
				return value.key == state.race;
			})[0];
		}

		if (state.birthsign === undefined) {
			this.birthsign = defaultBirthsign;
		} else {
			this.birthsign = this.birthsigns.filter(function(value) {
				return value.name == state.birthsign;
			})[0];
		}
	},

	computed: {
		build: function () {
			var build = defaultBuild();
			build.sex = this.sex;

			this.race.apply(build);
			this.majorSkills.forEach(function(skill) { major(build, skill.value) });
			this.minorSkills.forEach(function(skill) { minor(build, skill.value) });
			this.birthsign.apply(build);
			specialization(build, this.specialization);
			this.favoredAttributes.forEach(function(attr) { favored(build, attr.value) });
			stats(build);

			return build;
		},
		state: function() {
			function notBlank(value) { return value.value !== ''; }
			return {
				sex: this.sex,
				race: this.race.key,
				birthsign: this.birthsign.name,
				specialization: this.specialization,
				favored: this.favoredAttributes.filter(notBlank).map(x => x.value),
				major: this.majorSkills.filter(notBlank).map(x => x.value),
				minor: this.minorSkills.filter(notBlank).map(x => x.value),
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
			this.race = defaultRace;
			this.birthsign = defaultBirthsign;
		},
		save: function() {
			window.history.pushState('character', document.title, this.url);
			this.saved = true;
		}
	}
});
