angular.module('phone')

    .controller('DialCtrl', function($scope, $modal, MobileButtons, MyContacts) {
        $scope.display = '';

        var contacts = MyContacts.contacts;

        $scope.buttons = MobileButtons.buttons;


        $scope.dial = function(button) {
            $scope.display += button.number;

            //$scope.search = MobileButtons.mapper(number);
        };

        $scope.dialing = function(number) {

            alert('dialing to ' + number);
        };

        $scope.delete = function(number) {

            $scope.display = number.slice(0,-1);
        };

        $scope.setContact = function(contact) {
            $scope.display = contact.number;
        };

        $scope.$watch('display', function(newNum, oldNum) {

            $scope.searchContacts = [];

            $scope.myFilter = MobileButtons.mapper(newNum);

            for(var i = 0; i < contacts.length; i++) {
                for(var j = 0; j < $scope.myFilter.length; j++) {
                    if(contacts[i].name.toLowerCase().includes($scope.myFilter[j]) || contacts[i].number.includes($scope.display)) {
                        $scope.searchContacts.push(contacts[i]);
                        break;
                    }
                }
            }
        });


        $scope.animationsEnabled = true;

        $scope.results = function () {

            var myModal = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'contactsPopUp.html',
                controller: 'ContactsPopUpCtrl',
                resolve: {
                    contacts: function () {
                        return $scope.searchContacts;
                    }
                }
            });

            myModal.result.then(function (selectedContact) {
                $scope.display = selectedContact.number;
            });
        };

    });