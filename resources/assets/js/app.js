var Vue = require('vue');

Vue.config.debug = true

new Vue({
	el: '#app',

	data: {
		sex: null,
		raceIndex: 0,
		birthsign: null,
		specialization: null,
		favoredAttributes: [],
		majorSkills: [],
		minorSkills: [],
		races: require('./races/all'),
	},

	computed: {
		build: function () {
			var build = {
				sex: this.sex,
				stats: {
					strength: 0,
					intelligence: 0,
					willpower: 0,
					agility: 0,
					speed: 0,
					endurance: 0,
					personality: 0,
					luck: 0,
				}
			};

			this.selectedRace.apply(build);

			return build;
		},
		selectedRace: function () {
			return this.races[this.raceIndex];
		}
	}
});