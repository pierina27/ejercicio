angular.module('ejercicio.controller')
.controller('DesplegableListController', ['$scope', 'service', '$state', '$ionicPopup', function($scope, service, $state, $ionicPopup) {


$scope.groups = [];


var desplegableList = function(){

  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
}

desplegableList();

$scope.toggleGroup = function(group) {
  if ($scope.isGroupShown(group)) {
    $scope.shownGroup = null;
  } else {
    $scope.shownGroup = group;
  }
};
$scope.isGroupShown = function(group) {
  return $scope.shownGroup === group;
};

}])