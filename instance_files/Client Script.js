// Client Script
api.controller = function() {
    var c = this;

    c.data = {
        user_id: c.options.user_id,
        user_name: "",
			  email: "",
			  title: "",
				photo: "",
			  location: "",
			  phone: ""
    };

    c.searchUser = function() {
        var userID = c.data.user_id;

        // Client-side validation
        if (!userID) {
            c.server.get().then(function(response) {
                c.data.user_name = response.data.user_name;
							  c.data.email = response.data.email;
							  c.data.title = response.data.title;
							  c.data.photo = response.data.photo;
							  c.data.location = response.data.location;
							  c.data.phone = response.data.phone;
            });
            return;
        }

        // Call server script to get user name
        c.server.get({
            action: "getUserInfo",
            userID: userID
        }).then(function(response) {
            c.data.user_name = response.data.user_name;
					  c.data.email = response.data.email;
					  c.data.title = response.data.title;
				    c.data.photo = response.data.photo;
					  c.data.location = response.data.location;
					  c.data.phone = response.data.phone;
        });
    };
};
