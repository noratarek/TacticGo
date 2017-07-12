var app = angular.module('tacticgo.services.plans', []);

app.service('PlanStore', function ($q) {
    var q = $q.defer();

    var baseUrl = "https://graduation-project-api.herokuapp.com/api/";

    var self = {

        listPlans: function (token) {
            var settings = {
                "url": baseUrl + "plans?page=1&per_page=20&Authorization="
                    + token +
                    "ukbRwpdLzWSsJquNby1Q&Accept-Language=en&Accept=application%2Fvnd.graduation-project-api-v1%20json",
                "method": "GET"
            }

            return $.ajax(settings).done(function (response) {
                console.log("have plans" + response);
            });
        },

        createPlan: function (token, title, description, level, requirements, goals, category) {
            var settings = {
                "url": baseUrl + "plans",
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "accept-language": "en",
                    "authorization": token
                },
                "data": {
                    "plan[title]": title,
                    "plan[description]": description,
                    "plan[level]": level,
                    "plan[requirements]": requirements,
                    "plan[goals]": goals,
                    "plan[category]": category
                }
            }

            return $.ajax(settings).done(function (response) {
                console.log(response);
            });

        }
    };
    return self;
});

