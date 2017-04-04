angular.module('sww').controller('veiculosCtrl', function ($scope, veiculos, paginaAPIService) {
    $scope.veiculos = veiculos.data.results;
    $scope.next = paginaAPIService.isNext(veiculos);
    $scope.previous = paginaAPIService.isPrevious(veiculos);
    $scope.proximaPagina = paginaAPIService.getNextPage(veiculos);
    $scope.paginaAnterior = paginaAPIService.getPreviousPage(veiculos);
});