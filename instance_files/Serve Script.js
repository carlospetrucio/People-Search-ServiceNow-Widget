(function() {
    data.user_name = "";
    data.email = "";
	  data.title = "";
	  data.photo =  "";
	  data.location = "";
	  data.phone = "";
    // Get user info based on user ID
    if (input && input.action === "getUserInfo" && input.userID) {
        var userID = input.userID;

        var userGr = new GlideRecord('sys_user');
        if (userGr.get('user_name', userID)) {
            data.user_name = userGr.getValue('name');
					  data.email = userGr.getValue('email');
					  data.title = userGr.getValue('title');
						data.photo = userGr.getValue('photo');
					  data.location = userGr.getDisplayValue('location');
					  data.phone = userGr.getValue('phone');
        }
    }
})();
