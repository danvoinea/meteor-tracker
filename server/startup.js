function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


// What to do when the server first starts up
Meteor.startup(function() {

    // Fill the collections with some initial data if it's empty - both complaints and comments

    if (Complaints.find().count() === 0) {
        _(30).times(function(n) {
            Complaints.insert({ 
                issue: Fake.sentence(7), 
                description: Fake.paragraph(30), 
                name: Fake.user().fullname, 
                commentCount: 0,
                userID: "generated",
                lastUpdate: randomDate( new Date(2015, 0, 1), new Date()),
                status: Fake.fromArray(['Open','Resolved']),
                priority: Fake.fromArray(['Urgent', 'Important', 'Update'])    
            },{validate: false, getAutoValues: false}, function(error, _id){

                // _id;
                _(Math.floor((Math.random() * 10) + 1)).times(function(n) {

                    Comments.insert({
                        complaint_id: _id,
                        comment: Fake.paragraph(3),
                        name: Fake.user().fullname,
                        userID: "generated",
                        cost: Fake.fromArray([0,50,100,2050]),
                        action: Fake.fromArray(['comment','resolved']),
                        lastUpdate: randomDate( new Date(2015, 0, 1), new Date())
                    },{validate: false, getAutoValues: false});


                });
            });
        });
    }


});
