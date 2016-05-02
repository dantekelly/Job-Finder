(function() {
  var app = angular.module('searchQuery', []);

  app.service('queryService', function () {
    var query = {};
    return {
      getQuery: function () {
        return query;
      },
      setQuery: function(value) {
        query = value;
      }
    };
  });
})();

