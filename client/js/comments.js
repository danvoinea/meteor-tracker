Comments = new Meteor.Collection("comments");

Meteor.subscribe("comments");

Template.fullComplaint.Comments = function(){
    
    console.log(this);
    
    return Comments.find({complaint_id: this._id}, {sort: {lastUpdate: 1}}).
        map(function(document, index){
        document.index = index+1;
        //.fetch in loc de .map
    return document;
});
}

