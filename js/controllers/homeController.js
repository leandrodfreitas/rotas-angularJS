app.controller('homeController', function($scope, $routeParams) {

   $scope.title = "Home";
   
   // Passando parametros na URL - http://localhost/leandro/#/?name=Leandro&lastName=Freitas
   $scope.name = $routeParams.name;
   $scope.lastName = $routeParams.lastName;
   
});