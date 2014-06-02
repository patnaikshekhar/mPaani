angular.module('mPaani.controllers', [])

.controller('LoginCtrl', function($scope) {
})

.controller('SignUpCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope) {
})

.controller('DashboardCtrl', function($scope, $ionicModal) {
    $scope.points = 90;

    console.log(jQuery('.dial'));
    jQuery('.dial').knob();

    $ionicModal.fromTemplateUrl('modal.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });

    $scope.showModal = function() {
        $scope.modal.show();
    };
})

.controller('TransactionsCtrl', function($scope) {

    $scope.transactions = [
        {
            'month': 'May 2014',
            'transactions': [
                {
                    'vendor': 'Vodaphone',
                    'description': 'Recharge',
                    'points': 50,
                    'date': '15/05/2014'
                },
                {
                    'vendor': 'Sansar',
                    'description': 'Purchase from Kirana',
                    'points': 20,
                    'date': '10/05/2014'
                },
                {
                    'vendor': 'Water',
                    'description': 'Loan Payment',
                    'points': -90,
                    'date': '02/05/2014'
                },
                {
                    'vendor': 'Nilgiris',
                    'description': 'Purchase from Kirana',
                    'points': 10,
                    'date': '01/05/2014'
                }
            ]
        },
        {
            'month': 'April 2014',
            'transactions': [
                {
                    'vendor': 'Vodaphone',
                    'description': 'Recharge',
                    'points': 50,
                    'date': '25/04/2014'
                }
            ]
        },
        {
            'month': 'March 2014',
            'transactions': [
                {
                    'vendor': 'Sansar',
                    'description': 'Purchase from Kirana',
                    'points': 20,
                    'date': '30/03/2014'
                },
                {
                    'vendor': 'Vodaphone',
                    'description': 'Recharge',
                    'points': 50,
                    'date': '12/03/2014'
                }
            ]
        }
    ];
})

.controller('PartnerListCtrl', function($scope, $location) {

    $scope.back = function() {
        $location.path('/app/home/partners');
    };

    $scope.partnerList = [
        {
            'name': 'Vodaphone',
            'image': 'Vodaphone.jpg',
            'offers': [
                {
                    'description': 'Recharge for Rs 100',
                    'points': 5
                },
                {
                    'description': 'Recharge for Rs 200',
                    'points': 10
                },
                {
                    'description': 'Recharge for Rs 500',
                    'points': 20
                },
                {
                    'description': 'Recharge for Rs 1000',
                    'points': 45
                },
                {
                    'description': 'Recharge for Rs 2000',
                    'points': 90
                },
            ]
        },
        {
            'name': 'Airtel',
            'image': 'Airtel.jpg',
            'offers': [
                {
                    'description': 'Recharge for Rs 10',
                    'points': 5
                },
                {
                    'description': 'Recharge for Rs 20',
                    'points': 10
                },
                {
                    'description': 'Recharge for Rs 500',
                    'points': 60
                },
                {
                    'description': 'Recharge for Rs 1000',
                    'points': 80
                },
                {
                    'description': 'Recharge for Rs 2000',
                    'points': 100
                },
            ]
        },
        {
            'name': 'Tata Docomo',
            'image': 'Tata.jpg',
            'offers': [
                {
                    'description': 'Recharge for Rs 10',
                    'points': 5
                },
                {
                    'description': 'Recharge for Rs 20',
                    'points': 10
                },
                {
                    'description': 'Recharge for Rs 500',
                    'points': 60
                },
                {
                    'description': 'Recharge for Rs 1000',
                    'points': 80
                },
                {
                    'description': 'Recharge for Rs 2000',
                    'points': 100
                },
            ]
        }
    ];
})

.controller('OffersCtrl', function($scope) {

    $scope.offers = [
        {
            'vendor': 'Vodaphone',
            'description': '10 Points extra on Rechange of Rs 100 and Above',
            'end': 'Today'
        },
        {
            'vendor': 'Sansar',
            'description': '5 Points extra on Purchases above Rs 200',
            'end': '7th June'
        },
        {
            'vendor': 'Airtel',
            'description': '20 Points extra on Rechange of Rs 100 and Above',
            'end': '8th June'
        },
        {
            'vendor': 'Airtel',
            'description': '25 Points extra on Rechange of Rs 500 and Above',
            'end': '8th June'
        },
        {
            'vendor': 'Tata',
            'description': '5 Points extra on Rechange of Rs 50 and Above',
            'end': '1st June'
        },
        {
            'vendor': 'Nilgiris',
            'description': '10 Points extra on Purchases of Rs 500 and Above',
            'end': '1st June'
        },
        {
            'vendor': 'Nilgiris',
            'description': '20 Points extra on Purchases of Rs 1000 and Above',
            'end': '1st June'
        },
    ];
})

.controller('RedeemCtrl', function($scope) {
   $scope.rewards = [
        {
            'vendor': 'Tata-AIG',
            'description': '25% off on any Health Insurance Policy',
            'points': 400
        },
        {
            'vendor': 'BodhiSutra',
            'description': 'Mobile English Classes - 10 Classes',
            'points': 1000
        },
        {
            'vendor': 'BodhiSutra',
            'description': 'Mobile English Classes - 30 Classes',
            'points': 2000
        },
        {
            'vendor': 'Brilliant',
            'description': '25% off on Math Tutions',
            'points': 200
        },
        {
            'vendor': 'Brilliant',
            'description': '25% off on Physics Tutions',
            'points': 200
        },
        {
            'vendor': 'Brilliant',
            'description': '25% off on English Tutions',
            'points': 200
        },
        {
            'vendor': 'Airtel',
            'description': 'Mobile English Classes - 2 Weeks',
            'points': 1000
        },
        {
            'vendor': 'Airtel',
            'description': 'Mobile English Classes - 4 Weeks',
            'points': 3000
        },
   ];

   $scope.back = function() {
        $location.path('/app/home/redeem');
   };
});
