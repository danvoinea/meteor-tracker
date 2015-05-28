Complaints = new Meteor.Collection("complaints");

Complaints.attachSchema(Schemas.Complaint);


// Publish the collection to the client
Meteor.publish("complaints", function() {
  return Complaints.find();
});

// Set permissions on this collection
Complaints.deny({
  remove: function(userId, doc) {
    return false;
  }
});

Complaints.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  }
});


