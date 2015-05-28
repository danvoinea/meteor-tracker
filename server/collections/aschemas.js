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
        max: 200
    },
    status: {
        type: String,
        allowedValues: ['Open', 'Resolved'], 
        label: "Complain Status",
        max: 200
    },

    lastUpdate: {
        type: Date,
        label: "When last updated"
    }
});


Schemas.Comments = new SimpleSchema({
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
        max: 200
    },
    lastUpdate: {
        type: Date,
        label: "When last updated"
    }
});
