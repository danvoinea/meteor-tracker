Template.complaints.Complaints = function(){
    return Complaints.find({}, {sort: {lastUpdate: -1}}).
        map(function(document, index){
    
        document.index = index+1;
        //.fetch in loc de .map
    return document;
});
}

