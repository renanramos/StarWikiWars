angular.module('sww').controller('planetaNameCtrl', function($scope, planeta){
    $scope.planeta = planeta.data.results[0];
});