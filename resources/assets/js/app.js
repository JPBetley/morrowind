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
		races: require('./races/all.js'),
	},

	computed: {
		build: function () {
			var build = {
				stats: {
					strength: 0,
					endurance: 0,
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