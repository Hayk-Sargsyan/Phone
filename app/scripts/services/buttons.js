angular.module('phone')
  .factory('MobileButtons', function() {
        var buttons= [
            [
                {
                    number : '1',
                    letters: ['%']
                },
                {
                    number : '2',
                    letters: ['a', 'b', 'c']
                },
                {
                    number : '3',
                    letters: ['d', 'e', 'f']
                }
            ],
            [
                {
                    number : '4',
                    letters: ['g', 'h', 'i']
                },
                {
                    number : '5',
                    letters: ['j', 'k', 'l']
                },
                {
                    number : '6',
                    letters: ['m', 'n', 'o']
                }
            ],
            [
                {
                    number : '7',
                    letters: ['p', 'q', 'r', 's']
                },
                {
                    number : '8',
                    letters: ['t', 'u', 'v']
                },
                {
                    number : '9',
                    letters: ['w', 'x', 'y', 'z']
                }
            ],
            [
                {
                    number : '*',
                    letters: ['+']
                },
                {
                    number : '0',
                    letters: ['_']
                },
                {
                    number : '#',
                    letters: ['^']
                }
            ]
        ];

        var map = {
            '1' : [''],
            '2' : ['a', 'b', 'c'],
            '3' : ['d', 'e', 'f'],
            '4' : ['g', 'h', 'i'],
            '5' : ['j', 'k', 'l'],
            '6' : ['m', 'n', 'o'],
            '7' : ['p', 'q', 'r', 's'],
            '8' : ['t', 'u', 'v'],
            '9' : ['w', 'x', 'y', 'z'],
            '0' : [''],
            '*' : [''],
            '#' : ['']
        };

        var mapper = function(number) {
            // console.log('number', number);

            var myArr = number.split('');

            if(!myArr.length) {
                return [];
            }

            var firstKey = myArr[0];
            var newMap = angular.copy(map);
            var combos = newMap[firstKey];

            for (var index = 1 ; index < myArr.length ; index++) {
                var key = myArr[index];
                var newCombos = [];

                for (var i = 0 ; i < combos.length ; i++) {

                    var combo = combos[i];

                    for (var j = 0 ; j < newMap[key].length ; j++) {
                        newCombos.push(combo + newMap[key][j]);
                    }
                }

                combos = newCombos;
            }

            return combos;
        };

        return {
            buttons: buttons,
            mapper: mapper
        };
    });