(function() {
  var app = angular.module('results', []);

  app.directive('ngResults', function() {
    return {
      restrict: 'E',
      templateUrl: '../views/results.html',
      controller:function($scope, $http){
        $http.get('scripts/apisearch.json').success(function(data) {
          $scope.results = data;
          $scope.results.location = data.city + ', ' + data.country;
        });
      },
      controllerAs: 'results'
    }
  });

})();