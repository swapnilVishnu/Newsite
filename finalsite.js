if (Meteor.isClient) {
  // counter starts at 0
  	$(document).ready(function(){
		$(".dropdown").ready(            
		function() {
			$('.dropdown-menu', this).stop( true, true ).slideDown("fast");
			$(this).toggleClass('open');        
		},
		function() {
			//$('.dropdown-menu', this).stop( true, true ).slideUp("fast");
			//$(this).toggleClass('open');       
		}
		);
	});
  
  Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
       fieldName: 'address',
        fieldLabel: 'Address',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'phone-number',
        fieldLabel: 'Phone Number',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
