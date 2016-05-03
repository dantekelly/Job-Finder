(function() {
  var app = angular.module('results', ['searchQuery', 'htmlFilter']);

  app.directive('ngResults', function() {
    return {
      restrict: 'AE',
      templateUrl: 'scripts/app/views/results.html',
      controller:function($scope, $http, queryService){
        $scope.searchParams = {radius: 50, location: $('#location').val()};
        queryService.setQuery($scope.searchParams);

        $scope.search = queryService.getQuery();

        $scope.getAPI = function() {
          $http({
            url: 'api',
            method: "GET",
            params: $scope.search
          }).then(function (success) {
            console.log(success.data.results);
            $scope.results = success.data.results;
          }).catch(function (error) {
            console.log(error)
          });
        };

        $scope.showResults = function() {
          $scope.enableResults = true;
          $('section').addClass('enabled');
          $('header').removeClass('long');
        };
      },
      controllerAs: 'results'
    }
  });
})();