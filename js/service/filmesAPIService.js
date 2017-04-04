angular.module('sww').factory('filmesAPI', function($http, $q, $rootScope, config,  utilAPI){

    var _getFilmes = function(){
        return $http.get(config.baseUrlFilmes);
    };    

    var _getFilmeByName = function(name){
        return $http.get(config.baseSearchUrlFilmes + name);
    };

    var _getInfo = function(name, info){
        var promise = _getFilmeByName(name);
        utilAPI.getInformacoes(promise, info);
    };

    return {
        getFilmes : _getFilmes,
        getFilmeByName : _getFilmeByName,
        getInfo : _getInfo
    }
});