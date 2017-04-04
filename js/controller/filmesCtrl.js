angular.module('sww').controller('filmesCtrl', function($scope, filmes){    
        $scope.filmes = filmes.data.results;
});