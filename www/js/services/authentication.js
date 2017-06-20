var app = angular.module('tacticgo.services.authentication', []);

app.service('AuthService', function ($q) {
    var q = $q.defer();
    var baseUrl = "https://graduation-project-api.herokuapp.com/v1/";
    var self = {
        login: function (email, password) {
            
            var settings = {
                "url": baseUrl + "sessions",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": {
                    "session[email]": email,
                    "session[password]": password
                }
            }

            return $.ajax(settings).done(function (response) {
                console.log("logged in" + response);
            });
        },
        signup: function (email, password1, password2) {
            var settings = {
                "url": baseUrl + "users",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"                  
                },
                "data": {
                    "user[email]": email,
                    "user[password]": password1,
                    "user[password_confirmation]": password2
                }
            }

            return $.ajax(settings).done(function (response) {
                    console.log("signed up" + response);
                });
        }
    };
    return self;
});

