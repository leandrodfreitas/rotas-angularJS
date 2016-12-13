app.config(function($routeProvider) {
   
   $routeProvider
   .when('/', {
      controller: 'homeController',
      templateUrl: 'templates/home.html'   
   })
   .when('/sobre', {
      controller: 'sobreController',
      templateUrl: 'templates/sobre.html'
   })
   .when('/contato', {
      controller: 'contatoController',
      templateUrl: 'templates/contato.html'
   })
   .when('/404', {
      controller: 'pageNotFoundController',
      templateUrl: 'templates/404.html'
   }).otherwise('/404');
   
});