Template.layout.helpers({
	'games': function(){
    	
		Meteor.call('getDoto',function(err,results){
			Session.set('games',JSON.parse(results.content).matches);
		});

		var matches = Session.get('games');

		for (var i = 0; i < matches.length; ++i) {
			var temp = parseInt(matches[i]['timediff']);
			var diff = moment.duration(temp,'seconds').humanize();
        	matches[i]['timediffHumanized'] = diff;
    	}

    	Session.set('games',matches);
		return Session.get('games');
  	}
  });