Template.registerHelper("fromNow", function(date) {
    if(date) return moment(date).fromNow();
});


Template.registerHelper("calendar", function(date) {
    if(date) return moment(date).calendar();
});

Template.registerHelper("firstLetters", function(name) {    
    if (name) return name.match(/\b(\w)/g).join('').toUpperCase();
});

Template.registerHelper("isResolved", function(status) {    
    if (status === "Resolved") 
    { 
        return true;
    } else {
        return false;
    }
});

Template.registerHelper("createLinkComplaint", function(id) {    
    if (id){
        var myReturn = Complaints.findOne({'_id': id});
        return '<a href="/complaint/'+id+'" class="'+myReturn.priority+'">'+myReturn.issue+'</a>:';
    }
});
