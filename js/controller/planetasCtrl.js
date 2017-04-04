angular.module('sww').controller('planetasCtrl', function($scope, planetas, paginaAPIService){
    
    $scope.planetas = planetas.data.results;
    $scope.next = paginaAPIService.isNext(planetas);
    $scope.previous = paginaAPIService.isPrevious(planetas);
    $scope.proximaPagina = paginaAPIService.getNextPage(planetas); 
    $scope.paginaAnterior = paginaAPIService.getPreviousPage(planetas);   

});