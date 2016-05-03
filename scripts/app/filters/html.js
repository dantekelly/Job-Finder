(function() {
  var app = angular.module('htmlFilter', []);
  
  app.filter('html', function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  });

})();