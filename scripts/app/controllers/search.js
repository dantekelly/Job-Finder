(function() {
  var app = angular.module('search', []);

  app.controller('SearchController', ['$scope', function($scope){
    $scope.search = {keywords: '', location: '', radius: '50'};
  }]);

})();