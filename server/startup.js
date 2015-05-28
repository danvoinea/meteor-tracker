function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// What to do when the server first starts up
Meteor.startup(function() {


    // Fill the collection with some initial data if it's empty
    if (Complaints.find().count() === 0) {
        _(30).times(function(n) {
            Complaints.insert({ 
                issue: Fake.sentence(7), 
                description: Fake.paragraph(3), 
                name: Fake.user().fullname, 
                lastUpdate: randomDate( new Date(2015, 0, 1), new Date()),
                status: Fake.fromArray(['Open','Resolved'])
            }, function(error, _id){
                // _id;
                Comments.insert({
                    complaint_id: _id,
                    comment: Fake.paragraph(3),
                    name: Fake.user().fullname,
                    cost: Fake.fromArray([0,50,100,2050]),
                    lastUpdate: randomDate( new Date(2015, 0, 1), new Date())
                });

            });
        });
    }


});
