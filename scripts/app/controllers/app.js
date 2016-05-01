(function() {
  var app = angular.module('main', []);

  //app.controller('QueryController', function($scope, $http){
  //  $http.get('scripts/apisearch.json').success(function(data) {
  //      $scope.results = data;
  //      $scope.results.location = data.city + ', ' + data.country;
  //  });
  //});

  app.directive('ngResults', function() {
    return {
      restrict: 'AE',
      //template: '<h1>Yo</h1>'
      templateUrl: 'scripts/app/views/results.html',
      controller:function($scope, $http){
        $http.get('scripts/json/apisearch.json').success(function(data) {
          $scope.results = data;
        });

        $scope.anableCustomerDirective = false;
        $scope.showdiv = function() {
          $scope.enableCustomerDirective = true;
          $('section').addClass('enabled');
        };

        $scope.distance = function(lat1, lon1) {
          var p = 0.017453292519943295;
          var c = Math.cos;
          var a = 0.5 - c((position.coords.latitude - lat1) * p)/2 +
            c(lat1 * p) * c(position.coords.latitude * p) *
            (1 - c((position.coords.longitude - lon1) * p))/2;
          return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        }
      },
      controllerAs: 'results'
    }
  });

})();