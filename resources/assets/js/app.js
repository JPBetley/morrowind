var Vue = require('vue');

Vue.config.debug = true

new Vue({
	el: '#app',

	data: {
		sex: null,
		majorSkills: [],
		minorSkills: [],
		favoredAttributes: [
			require('./attributes/default'),
			require('./attributes/default')
		],
		attributes: require('./attributes/all'),
		birthsign: require('./birthsigns/default'),
		birthsigns: require('./birthsigns/all'),
		race: require('./races/default'),
		races: require('./races/all'),
		specialization: require('./specializations/default'),
		specializations: require('./specializations/all'),
	},

	computed: {
		build: function () {
			var build = require('./defaultBuild')();
			build.sex = this.sex;

			this.race.apply(build);
			this.birthsign.apply(build);
			this.specialization.apply(build);
			console.log(this.favoredAttributes)
			this.favoredAttributes.forEach(function(attr) { attr.apply(build) });

			return build;
		}
	}
});