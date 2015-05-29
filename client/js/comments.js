Meteor.subscribe("comments");

Template.fullComplaint.helpers({
    Comments: function(){
        return Comments.find({complaint_id: this._id}, {sort: {lastUpdate: 1}}).
        map(function(document, index){
            document.index = index+1;
            //.fetch in loc de .map
            return document;
        });
    },
    commentSchema: function() {
        return Schemas.Comment;
    }
});


Template.fullComplaint.events({
    "click button[type=submit]": function(e) {
        if ($(e.target).prop("id") == "resolve") {
            submit = 'resolved';
        } else if ($(e.target).prop("id") == "comment") {
            submit = 'comment';
        } else if ($(e.target).prop("id") == "reopen") {
            submit = 'reopen';
        } else { 
            submit = 'comment';
        }
    }
});

// handle comment insertion
// https://github.com/aldeed/meteor-autoform
//https://github.com/aldeed/meteor-autoform/blob/master/api.md
AutoForm.hooks({
    commentForm:{
        before: {
            insert: function(doc) {
                doc.complaint_id = this.docId;
                doc.action = submit;

                if (doc.action === "resolved") { 


                    if (isNaN(doc.cost)){ 

                        AutoForm.getValidationContext("commentForm").addInvalidKeys([
                            {name: "cost", type: "expectedNumber"}
                        ]);

                        return false;
                    } else {
                        Complaints.update(doc.complaint_id, {"$set" : {'status': 'Resolved'}});
                    }
                } else if (doc.action === "reopen") { 
                    doc.action = 'comment';
                    Complaints.update(doc.complaint_id, {"$set" : {'status': 'Open'}});
                }

                Complaints.update(doc.complaint_id, {"$inc" : {'commentCount': 1}});

                return doc;
            }
        }
    }
});


