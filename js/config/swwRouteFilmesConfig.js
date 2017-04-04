angular.module('sww').config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/filmes', {
      templateUrl: 'view/filmes/filmes.html',
      controller: 'filmesCtrl',
      resolve: {
            filmes: function(filmesAPI){
                return filmesAPI.getFilmes(); 
            }
      }
  });

  $routeProvider.when('/filmes/:name',{
        templateUrl: 'view/filmes/filmesByName.html',
        controller: 'filmeNameCtrl',
        resolve: {
            filme: function(filmesAPI, $route){                
                return filmesAPI.getFilmeByName($route.current.params.name);
            },
            planetas: function(filmesAPI, $route){
                filmesAPI.getInfo($route.current.params.name, 'planets');
            },
            especies: function(filmesAPI, $route){
                filmesAPI.getInfo($route.current.params.name, 'species');
            },
            naves: function(filmesAPI, $route){
                filmesAPI.getInfo($route.current.params.name, 'starships');
            },
            personagens: function(filmesAPI, $route){
                filmesAPI.getInfo($route.current.params.name, 'characters');
            },
            veiculos : function(filmesAPI, $route){
                filmesAPI.getInfo($route.current.params.name, 'vehicles');
            }
        }
  });

  $routeProvider.otherwise({redirectTo: '/index.html'});
});
