// https://meteor.hackpad.com/Meteor-Cookbook-Using-Dates-and-Times-qSQCGFc06gH

Template.registerHelper("customDateFormat", function(date) {
    if(date) return moment(date).fromNow();
});

