angular.module('ejercicio.controller')
.controller('ListController', ['$scope', 'service', '$state', '$ionicPopup', function($scope, service, $state, $ionicPopup) {

 service.getList(function(result){
  $scope.list = result;
});

 $scope.callNotify = function(msg) {
   service.notify(msg);
 };

 $scope.add = function() {
  $scope.data = {};

  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.title" placeholder="titulo" >'+
    '<input type="text" ng-model="data.body" placeholder="Contenido" >',
    title: 'Datos de la lista',
    subTitle: 'Introduce los datos',
    scope: $scope,
    buttons: [
    { text: 'Cancel' },
    {
      text: '<b>Save</b>',
      type: 'button-positive',
      onTap: function(e) {
        if (!$scope.data.title && !$scope.data.body) {
         alert("Favor incluir todos los datos");
         e.preventDefault();
       } else {
         $scope.list.push($scope.data);
         alert("Elemento agregado correctamente al final de la lista");
       }
     }
   }

   ]
 });
};


}])