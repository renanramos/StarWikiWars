angular.module('sww').config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/pessoas',{
      templateUrl: 'view/pessoa/pessoas.html',
      controller: 'pessoasCtrl',
      resolve: {
          pessoas: function(pessoasAPI){
              return pessoasAPI.getPessoas();
          }
      }
  });

  $routeProvider.when('/pessoas/page/:id',{
      templateUrl: 'view/pessoa/pessoas.html',
      controller: 'pessoasCtrl',
      resolve: {
          pessoas: function(pessoasAPI, $route){
              return pessoasAPI.getPessoas($route.current.params.id);
          }
      }
  });

  $routeProvider.when('/pessoas/:name',{
        templateUrl: 'view/pessoa/pessoaByName.html',
        controller: 'pessoaNameCtrl',
        resolve: {
            pessoa: function(pessoasAPI, $route){
                return pessoasAPI.getPessoaByName($route.current.params.name);
            },
            filmes: function(pessoasAPI, $route){
                return pessoasAPI.getInfo($route.current.params.name, 'films');
            },
            especies: function(pessoasAPI, $route){
                return pessoasAPI.getInfo($route.current.params.name, 'species');
            },
            veiculos: function(pessoasAPI, $route){
                return pessoasAPI.getInfo($route.current.params.name, 'vehicles');
            },
            naves: function(pessoasAPI, $route){
                return pessoasAPI.getInfo($route.current.params.name, 'starships');
            }
        }
  });
  
  $routeProvider.when('/error',{
        templateUrl: 'view/error.html',        
  });

  $routeProvider.otherwise({redirectTo: '/index.html'});
});
