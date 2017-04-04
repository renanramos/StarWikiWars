angular.module('sww').factory('planetasAPI', function($http, config, utilAPI){
    
    var _getPlanetas = function(idPage){
        if(!idPage){
            idPage = 1;
        }
        return $http.get(config.baseUrlPlanetas + idPage);
    };
    
    var _getPlanetaByName = function(name){
        return $http.get(config.baseSearchUrlPlanetas + name);
    };

    var _getInfo = function(name, info){
        var promise = _getPlanetaByName(name);        
        utilAPI.getInformacoes(promise, info);
    };

    return{
        getPlanetas : _getPlanetas,
        getPlanetaByName : _getPlanetaByName,
        getInfo : _getInfo
    }
});