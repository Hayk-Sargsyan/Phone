angular.module('phone')
    .factory('MyContacts', function() {
        var contacts= [
            {
                name: 'Hayk',
                number: '095818228'
            },
            {
                name: 'Nick',
                number: '099290933'
            },
            {
                name: 'Rubo',
                number: '095081750'
            },
            {
                name: 'Davo',
                number: '095999087'
            },
            {
                name: 'Ararat',
                number: '024845126'
            }
        ];

        var addContact = function(contact) {
            contacts.push(contact);
        };

        var delContact = function(contact) {
            for(var i = 0; i < contacts.length; i++) {
                if(contact.name == contacts[i].name && contact.number == contacts[i].number) {
                    contacts.splice(i,1);
                    break;
                }
            }
        };


        return  {
            contacts : contacts,
            add      : addContact,
            del      : delContact
        };
    });