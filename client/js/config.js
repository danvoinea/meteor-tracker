Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'fullName',
        fieldLabel: 'Full name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your full name");
            return false;
          } else {
            return true;
          }
        }
    }]
});


//DISABLE DEBUG
AutoForm.addHooks(null, {
    onError: function (name, error, template) {
      console.log(name + " error:", error);
    }
  });

