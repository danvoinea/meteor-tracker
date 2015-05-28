Template.homePage.Complaints = function(){
    return Complaints.find({userID:Meteor.userId()}, {sort: {lastUpdate: -1}}).
        map(function(document, index){
        document.index = index+1;
        //.fetch in loc de .map
        return document;
        
});
}

//TO DEBUG - BROKEN
Template.homePage.Comments = function(){
    console.log(Meteor.userId());
    return Comments.find({userID:Meteor.userId()});
};
