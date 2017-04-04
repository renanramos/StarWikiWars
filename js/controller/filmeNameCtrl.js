angular.module('sww').controller('filmeNameCtrl', function($scope, filme, planetas){    
    $scope.filme = filme.data.results[0];    
});