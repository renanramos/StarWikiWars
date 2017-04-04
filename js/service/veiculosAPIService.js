angular.module('sww').factory('veiculosAPI', function($http, $q, $rootScope, config,  utilAPI){

    var _getVeiculos = function(idPage){
        if(!idPage){
            idPage = 1;
        }
        return $http.get(config.baseUrlVeiculos + idPage);
    };  

    var _getVeiculoByName = function(name){
        return $http.get(config.baseSearchUrlVeiculos + name);
    };

    var _getInfo = function(name, info){
        var promise = _getVeiculoByName(name);
        utilAPI.getInformacoes(promise, info);
    };

    return {
        getVeiculos : _getVeiculos,
        getVeiculoByName : _getVeiculoByName,
        getInfo : _getInfo
    }
});