Comments = new Meteor.Collection("comments");
Comments.attachSchema(Schemas.Comment);


Complaints = new Meteor.Collection("complaints");
Complaints.attachSchema(Schemas.Complaint);
