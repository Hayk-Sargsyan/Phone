angular.module('phone')
    .directive('contacts', function($modal) {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/partials/contact-list.html'
        };
    });
