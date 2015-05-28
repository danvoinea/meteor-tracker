// https://meteor.hackpad.com/Meteor-Cookbook-Using-Dates-and-Times-qSQCGFc06gH

Template.registerHelper("fromNow", function(date) {
    if(date) return moment(date).fromNow();
});


Template.registerHelper("calendar", function(date) {
    if(date) return moment(date).calendar();
});

Template.registerHelper("firstLetters", function(name) {    
    return name.match(/\b(\w)/g).join('').toUpperCase();
});
