angular.module('sww').controller('pessoasCtrl', function($scope, pessoas, paginaAPIService){    
    
    $scope.pessoas = pessoas.data.results;
    $scope.next = paginaAPIService.isNext(pessoas);
    $scope.previous = paginaAPIService.isPrevious(pessoas);
    $scope.proximaPagina = paginaAPIService.getNextPage(pessoas); 
    $scope.paginaAnterior = paginaAPIService.getPreviousPage(pessoas);   

});