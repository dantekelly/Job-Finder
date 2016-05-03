(function() {
  var app = angular.module('results', []);

  app.filter('html', function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  });

  app.service('queryService', function() {
    var query = {hello: 'LMNOP'};

    return {
      getQuery: function() {
        return query;
      },
      setQuery: function(value) {
        query = value;
      }
    }
  });

  app.controller('SearchController', ['$scope', 'queryService', function($scope, queryService){
//$scope.keywords = '';
//$scope.location = '';
//
//queryService.setQuery({keywords: $scope.keywords, location: $scope.location, radius: '50'});
//
    //$scope.setQuery = function() {
    //  $scope.search = {keywords: $scope.keywords, location: $scope.location, radius: '50'};
    //  queryService.setQuery($scope.search);
    //};
  }]);

  app.directive('ngResults', function() {
    return {
      restrict: 'AE',
      templateUrl: 'scripts/app/views/results.html',
      controller:function($scope, $http, queryService){
        $scope.keywords = 'heroppppn';
        $scope.location = $('#location').val()  ;
        $scope.querp = {radius: 50, location: $scope.location};

        queryService.setQuery($scope.querp);

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

        $scope.anableCustomerDirective = false;
        $scope.showdiv = function() {
          $scope.enableCustomerDirective = true;
          $('section').addClass('enabled');
          $('header').removeClass('long');
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