// Publish the collection to the client
Meteor.publish("complaints", function() {
  return Complaints.find({},{sort: {lastUpdate: -1}});
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


Comments.find().observe({
        added: function(post){
            // When new posts are added, the user gain the points.
            // console.log(post);
            Complaints.update(post.complaint_id, {$inc: {'commentCount': 1}},{validate: false, getAutoValues: false});     
        }
});

    