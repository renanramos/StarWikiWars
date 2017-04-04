angular.module('sww').config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/planetas', {
      templateUrl: 'view/planeta/planetas.html',
      controller: 'planetasCtrl',
      resolve: {
            planetas: function(planetasAPI){
                return planetasAPI.getPlanetas(); 
            }
      }
  });

  $routeProvider.when('/planetas/page/:id',{
      templateUrl: 'view/planeta/planetas.html',
      controller: 'planetasCtrl',
      resolve: {
          planetas: function(planetasAPI, $route){
              return planetasAPI.getPlanetas($route.current.params.id);
          }
      }
  });

   $routeProvider.when('/planetas/:name',{
        templateUrl: 'view/planeta/planetaByName.html',
        controller: 'planetaNameCtrl',
        resolve: {
            planeta: function(planetasAPI, $route){
                return planetasAPI.getPlanetaByName($route.current.params.name);
            },
            filmes: function(planetasAPI, $route){
                planetasAPI.getInfo($route.current.params.name, 'films');
            },
            pessoas: function(planetasAPI, $route){
                planetasAPI.getInfo($route.current.params.name, 'residents');
            }
        }
  });

  $routeProvider.otherwise({redirectTo: '/index.html'});
});
