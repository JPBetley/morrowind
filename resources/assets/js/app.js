var Vue = require('vue');

Vue.config.debug = true

new Vue({
	el: '#app',

	data: {
		sex: null,
		specialization: null,
		majorSkills: [],
		minorSkills: [],
		birthsignIndex: 0,
		birthsigns: require('./birthsigns/all'),
		raceIndex: 0,
		races: require('./races/all'),
		favoredAttributes: [],
		specializations: require('./specializations/all'),
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
				},
				abilities: [],
				multipliers: {
					health: 1,
					magicka: 1,
					stamina: 1,
				},
				resistances: {
					fire: 0,
					frost: 0,
					poison: 0,
					shock: 0,
					magicka: 0,
					disease: 0
				}
			};

			this.race.apply(build);
			this.birthsign.apply(build);

			return build;
		},
		race: function () {
			return this.races[this.raceIndex];
		},
		birthsign: function() {
			return this.birthsigns[this.birthsignIndex];
		}
	}
});