Meteor.publish('posts', function() {
	return Posts.find({});
//	return Posts.find({"title":"Meteor"});
//	You can select specific things to return to show to the client
});
//this thing selects what gets published instead of having meteor having everything autopublished

//example in the book (page 54)
/*
Meteor.publish('allPosts', function(){
	return Posts.find({}, {fields: {
		author: false
	// This allows which part of the data the client receives (so a finer control of what clients get)
	}});
});
*/