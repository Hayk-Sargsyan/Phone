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


        return contacts;
    });