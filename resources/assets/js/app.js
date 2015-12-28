var Vue = require('vue');

Vue.config.debug = true

new Vue({
	el: '#app',

	data: {
		sex: null,
		majorSkills: [],
		minorSkills: [],
		favoredAttributes: [],
		birthsign: require('./birthsigns/default'),
		birthsigns: require('./birthsigns/all'),
		race: require('./races/default'),
		races: require('./races/all'),
		specialization: require('./specializations/default'),
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
			this.specialization.apply(build);

			return build;
		}
	}
});