Meteor.methods({
	'getDoto': function(){
		return Meteor.http.call('GET', 'http://dailydota2.com/match-api');
	}
})