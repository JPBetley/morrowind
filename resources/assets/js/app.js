var Vue = require('vue');
var races = [
	require('./races/default.js'),
	require('./races/argonian.js'),
	require('./races/breton.js'),
	require('./races/dark-elf.js'),
	require('./races/high-elf.js'),
	require('./races/imperial.js'),
	require('./races/khajiit.js'),
	require('./races/nord.js'),
	require('./races/orc.js'),
	require('./races/redguard.js'),
	require('./races/wood-elf.js')
];

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
		races: races,
	},

	computed: {
		build: function () {
			var build = {
				stats: {
					strength: 0,
					endurance: 0,
				}
			};

			return build;
		},
		selectedRace: function () {
			return races[this.raceIndex];
		}
	}
});