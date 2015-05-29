Meteor.subscribe("complaints");


Template.complaints.helpers({
    Complaints: function(){
        filter = Session.get('complaintStatus');
        if ((filter) && ( (filter==="Open") || (filter==="Resolved") )) { 
            return Complaints.find({status: filter}); 
        } else {        
            return Complaints.find({}, {sort: {lastUpdate: -1}}).map(function(document, index){
                //this is a hack i did in order to number the posts.
                document.index = index+1;
                return document;
            });
        }

    },
    complaintSchema: function() {
        return Schemas.Complaint;
    }
});


Template.complaints.events({
    'click button.Open': function () {
        if (filter !== "Open"){ 
            Session.set("complaintStatus", 'Open');
            $("button").removeClass('active');
            $("button.Open").addClass('active');
        } else {
            Session.set("complaintStatus", '');
            $("button.Open").removeClass('active');
        }
    },
    'click button.Resolved': function () {
        if (filter !== "Resolved"){ 
            $("button").removeClass('active');
            $("button.Resolved").addClass('active');
            Session.set("complaintStatus", 'Resolved');
        } else {
            Session.set("complaintStatus", '');
            $("button.Resolved").removeClass('active');

        }
    },
    'click button.All': function () {
        $("button").removeClass('active');
        Session.set("complaintStatus", '');
    }

});


Template.complaints.rendered = function(){
    $("button").removeClass('active');
    $("button."+filter).addClass('active');
};
