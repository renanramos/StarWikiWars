angular.module('sww').config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/veiculos', {
      templateUrl: 'view/veiculo/veiculos.html',
      controller: 'veiculosCtrl',
      resolve: {
            veiculos: function(veiculosAPI){
                return veiculosAPI.getVeiculos(); 
            }
      }
  });

   $routeProvider.when('/veiculos/page/:id',{
      templateUrl: 'view/veiculo/veiculos.html',
      controller: 'veiculosCtrl',
      resolve: {
          veiculos: function(veiculosAPI, $route){
              return veiculosAPI.getVeiculos($route.current.params.id);
          }
      }
  });

  $routeProvider.when('/veiculos/:name',{
        templateUrl: 'view/veiculo/veiculosByName.html',
        controller: 'veiculosCtrl',
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
