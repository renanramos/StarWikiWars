angular.module('sww').controller('pessoaNameCtrl', function($scope, pessoa){    
    $scope.pessoa = pessoa.data.results[0];
    
});