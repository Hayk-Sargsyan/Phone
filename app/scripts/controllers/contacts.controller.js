angular.module('phone')
.controller('ContactsCtrl', function($scope, MyContacts, $modal) {
        $scope.searchText = '';

        $scope.contacts = MyContacts;

        var i;

        $scope.animationsEnabled = true;

        $scope.setContact = function(contact) {

            for(i = 0; i < $scope.contacts.length; i++) {
                if($scope.contacts[i].name == contact.name && $scope.contacts[i].number == contact.number) {
                    break;
                }
            }

            var contactModal = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'contactsModal.html',
                controller: 'ContactsModalCtrl',
                resolve: {
                    contact: function () {
                        return contact;
                    }
                }
            });

            contactModal.result.then(function (editedContact) {
                $scope.contacts[i] = editedContact;
            });

        };
    });