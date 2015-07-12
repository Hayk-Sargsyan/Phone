angular.module('phone', [
    'ui.bootstrap',
    "xeditable",
    'ngRoute'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when("/dial", {templateUrl: "views/dial.html", controller: "DialCtrl"}).
            when("/contacts", {templateUrl: "views/contacts.html", controller: "ContactsCtrl"}).
            otherwise({redirectTo: '/dial'});
    }])
    .run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    });
