Template.homePage.helpers({
    Complaints: function(){
        return Complaints.find({userID:Meteor.userId()}, {sort: {lastUpdate: -1}}).map(function(document, index){
            document.index = index+1;
            //.fetch in loc de .map
            return document;
        });
    },
    Comments: function(){
        return Comments.find({userID:Meteor.userId()});
    }
});
