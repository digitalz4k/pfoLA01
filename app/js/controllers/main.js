angular.module('pfoApp')
    .controller('MainCtrl', ['$scope', 'User', function ($scope, User) {
        $scope.brand = "Digitalz";
        $scope.userId = User.id;
        $scope.name = User.name;
        $scope.role = User.role;
        $scope.email = User.email;
    }]);