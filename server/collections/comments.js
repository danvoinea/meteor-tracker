Comments = new Meteor.Collection("comments");
Comments.attachSchema(Schemas.Comment);


// Publish the collection to the client
Meteor.publish("comments", function() {
  return Comments.find();
});

// Set permissions on this collection
Comments.deny({
  remove: function(userId, doc) {
    return false;
  }
});

Comments.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  }
});