//https://github.com/iron-meteor/iron-router/blob/devel/Guide.md
//https://github.com/meteorhacks/fast-render
//code shared between client and server
Router.configure({
    // This is the default layout/top-level template 
    layoutTemplate: 'pageLayout'
});


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
