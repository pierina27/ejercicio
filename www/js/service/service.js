angular.module('ejercicio.service')
.factory('service', ['$window', '$http', function(win, $http) {
   var pub = {};
   
   pub.notify = function(msg) {
       win.alert(msg);
   };

   pub.getList = function(fn) {
     url = 'https://jsonplaceholder.typicode.com/posts/';
     $http.get(url,{ params:  {limit: 100, direction: 'desc'}}).success( 
      function(response) {
        return fn(response); 
      });
   }


   return pub;
 }]);