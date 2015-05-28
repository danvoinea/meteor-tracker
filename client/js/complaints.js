Complaints = new Meteor.Collection("complaints");

Meteor.subscribe("complaints");
    
Template.complaints.Complaints = function(){
    return Complaints.find({}, {sort: {lastUpdate: -1}}).
        map(function(document, index){
        document.index = index+1;
        //.fetch in loc de .map
    return document;
});
}


Template.complaints.helpers({
  complaintSchema: function() {
    return Schemas.Complaint;
  }
});



AutoForm.addHooks('complaints', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  }
});


AutoForm.addHooks('fullComplaint', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  }
});