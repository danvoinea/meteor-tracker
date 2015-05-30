AccountsTemplates.addField({
    _id: 'fullName',
    type: 'text',
    required: true,
    displayName: "Full name",
    func: function(value){ return value === ''; },
    errStr: 'Please enter your full name'
});
