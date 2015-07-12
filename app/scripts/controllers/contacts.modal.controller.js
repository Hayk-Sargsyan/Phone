angular.module('phone')
    .controller('ContactsModalCtrl', function($scope, $modalInstance, contact) {

        $scope.contact = contact;

        $scope.old = angular.copy(contact);

        $scope.changed = false;

        $scope.save = function (contact) {
            $modalInstance.close(contact);
        };

        $scope.cancel = function () {
            $modalInstance.close($scope.old);
            $modalInstance.dismiss('cancel');
        };
    });