angular.module('phone')
    .controller('ContactsModalCtrl', function($scope, $modalInstance, contact, MyContacts) {

        $scope.contact = contact;

        $scope.old = angular.copy(contact);

        $scope.changed = false;

        $scope.save = function (contact) {
            $modalInstance.close(contact);
        };

        $scope.delete = function (contact) {
            MyContacts.del(contact);

            $modalInstance.dismiss('cancel');
        };

        $scope.cancel = function () {
            $modalInstance.close($scope.old);
        };
    });