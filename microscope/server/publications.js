Meteor.publish('posts', function() {
	return Posts.find();
});
//this thing selects what gets published instead of having meteor having everything autopublished