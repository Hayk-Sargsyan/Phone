angular.module('phone')
.controller('ContactsCtrl', function($scope, MyContacts, $modal) {
        $scope.searchText = '';

        $scope.contacts = MyContacts.contacts;

        $scope.isCollapsed = true;

        $scope.newContact = { };

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

        $scope.collaapse = function() {
            if($scope.isCollapsed == false) {
                $scope.isCollapsed = true;
            } else {
                $scope.isCollapsed = false;
            }
        };

        $scope.cancelAdd = function() {
            $scope.newContact = {};
            $scope.isCollapsed = true;
        };

        $scope.addContact = function() {
            MyContacts.add($scope.newContact);
            $scope.newContact = {};
            $scope.isCollapsed = true;
        }
    });