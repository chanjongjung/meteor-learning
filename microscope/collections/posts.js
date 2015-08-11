Posts = new Meteor.Collection('posts');
// Code inside folders that are not client/or server/will run in bothcontexts. So the Posts
// collection is available to both client and server.