(function() {
  var app = angular.module('main', []);

  app.controller('QueryController', function($scope, $http){
    $http.get('http://api.indeed.com/ads/apisearch?publisher=1345414146707985&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json').success(function(data) {
      $scope.countries = data;
    });
  });
})();