angular.module('phone')
    .directive('mybutton', function() {
        return {
            restrict: 'E',
            scope: {
                number: '=',
                letters: '='
            },
            templateUrl: 'views/partials/mybutton.html'
        };
    });
