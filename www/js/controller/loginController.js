angular.module('ejercicio.controller')
.controller('LoginController', ['$scope', 'service', '$state', function($scope, service, $state) {
   $scope.hayUsuario = true;
   $scope.hayClave = true;

   $scope.login = function() {
     if(this.usuario && this.clave){
     	$state.go('lista');
     }else if(!this.usuario && !this.clave){
     	$scope.hayUsuario = false;
     	$scope.hayClave = false;
     }else if(this.usuario && !this.clave){
     	$scope.hayUsuario = true;
     	$scope.hayClave = false;
     }else if(!this.usuario && this.clave){
     	$scope.hayUsuario = false;
     	$scope.hayClave = true;
     }
   };

 }])