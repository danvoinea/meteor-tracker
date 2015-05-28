//https://github.com/aldeed/meteor-collection2
Schemas = {};

Schemas.Complaint = new SimpleSchema({
    issue: {
        type: String,
        label: "Issue title",
        max: 200
    },
    description: {
        type: String,
        label: "Description"
    },
    name: {
        type: String,
        label: "Complained filed by...",
        autoValue: function() { var profile = Meteor.user().profile; return profile.fullName;  },
        max: 200
    },
    userID: {
        type: String,
        label: "ID of USER",
        autoValue: function(){ return this.userId; },
        max: 200
    },
    status: {
        type: String,
        allowedValues: ['Open', 'Resolved'], 
        label: "Complain Status",
        autoValue: function(){ return 'Open' },
        max: 200
    },
    priority: {
        type: String,
        allowedValues: ['Urgent', 'Important', 'Update'], 
        autoform: {
            options: [
                {label: "Urgent", value: "Urgent"},
                {label: "Important", value: "Important"},
                {label: "Update", value: "Update"}
            ]},
        max: 200
    },
    lastUpdate: {
        type: Date,
        label: "When last updated",
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    }
});


Schemas.Comment = new SimpleSchema({
    complaint_id: {
        type: String,
        label: "complaint id"
    },
    comment: {
        type: String,
        label: "Comment body text"
    },
    name: {
        type: String,
        label: "Comment filed by...",
        max: 200,
         autoValue: function() { var profile = Meteor.user().profile; return profile.fullName; }
    },
    userID: {
        type: String,
        label: "ID of USER",
         autoValue: function(){ return this.userId+"111"; },
        max: 200
    },
    cost: {
        type: Number,
        label: "Cost of repair",
        optional: true,
    },
    action: {
        type: String,
        allowedValues: ['comment', 'resolved'], 
        label: "Complain Status",
        optional: true,
        max: 200
    },
    lastUpdate: {
        type: Date,
        label: "When last updated",
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    }
});


SimpleSchema.debug = true;