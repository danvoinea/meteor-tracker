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
