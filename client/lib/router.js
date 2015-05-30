//https://github.com/iron-meteor/iron-router/blob/devel/Guide.md

Router.configure({
    // This is the default layout/top-level template 
    layoutTemplate: 'pageLayout'
});


var IR_Filters = {
    scrollUp: function() {
        $('body,html').animate({scrollTop:0},200);
    }
};
Router.onAfterAction(IR_Filters.scrollUp);

Router.map(function() {

    this.route('homePage', {
        path: '/'
    });

    this.route('complaints', {
        path: '/complaints', 
    } );
    
    this.route('complaint', {
        path: '/complaint/:_id',
        data: function () {
            return Complaints.findOne({_id: this.params._id})
        },
        template: 'fullComplaint'
    });
    
});

AccountsTemplates.configureRoute('signIn');
