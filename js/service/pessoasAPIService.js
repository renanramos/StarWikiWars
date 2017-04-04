angular.module('sww').factory('pessoasAPI', function($http, config, utilAPI){

    var _getPessoas = function(idPage){
        if(!idPage){
            idPage = 1;
        }
        return $http.get(config.baseUrlPessoas + idPage);
    };

    var _getPessoaByName = function(name){
        return $http.get(config.baseSearchUrlPessoa + name);
    };

    var _getInfo = function(name, info){
        var promise = _getPessoaByName(name);
        utilAPI.getInformacoes(promise, info);
    };

    return {
        getPessoas : _getPessoas,
        getPessoaByName : _getPessoaByName,
        getInfo : _getInfo
    };
});