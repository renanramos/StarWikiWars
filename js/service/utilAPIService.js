angular.module('sww').factory('utilAPI', function ($http, $q, $rootScope) {
    
    var _getInformacoes = function (promise, info) {

        promise.then(function (obj) {
            var listaInformacoes = obj.data.results[0];
            var listaResults = [];

            listaInformacoes[info].forEach(function (url) {
                listaResults.push($http.get(url));
            });

            $q.all(listaResults).then(function (result) {
                var tmp = [];
                angular.forEach(result, function (response) {                    
                    tmp.push(response.data);
                });

                //TODO preciso rever este caso
                switch(info) {
                    case 'characters': 
                        $rootScope.pessoasTable = tmp;
                        break;
                    case 'people': 
                        $rootScope.pessoasTable = tmp;
                        break;
                    case 'residents': 
                        $rootScope.pessoasTable = tmp;
                        break;

                    case 'films':
                        $rootScope.filmesTable = tmp;
                        break;
                    case 'starships':
                        $rootScope.navesTable = tmp;
                        break;
                    case 'vehicles':
                        $rootScope.veiculosTable = tmp;
                        break;
                    case 'species':
                        $rootScope.especiesTable = tmp;
                        break;
                    case 'planets':
                        $rootScope.planetasTable = tmp;
                        break;
                    default:
                        console.log('info não encontrado');
                }
                
            }).then(function (tmpResult) {
                return tmpResult;
            });
        });
    };

    return {
        getInformacoes: _getInformacoes
    }
});