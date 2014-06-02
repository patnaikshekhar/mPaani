angular.module('mPaani.controllers', [])

.controller('LoginCtrl', function($scope) {
})

.controller('SignUpCtrl', function($scope) {
})

.controller('MenuCtrl', function($scope) {
})

.controller('DashboardCtrl', function($scope) {
    $scope.points = 90;

    console.log(jQuery('.dial'));
    jQuery('.dial').knob();
});
