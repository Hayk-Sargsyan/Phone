angular.module('phone')

    .controller('ContactsPopUpCtrl', function ($scope, $modalInstance, contacts) {

        $scope.contacts = contacts;

        $scope.setContact = function (contact) {
            $modalInstance.close(contact);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });