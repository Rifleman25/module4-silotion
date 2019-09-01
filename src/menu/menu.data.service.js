(function () {
    'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($q, $timeout) {
  var service = this;

  var menuList = [];

  service.getAllCategories = function () {
    var response = $http({
        method: "GET",
        url: (ApiBasePath + '/categories.json')
    });

    return response;
  }

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
        method: "GET",
        params: {
            category: categoryShortName
        },
        url: (ApiBasePath + '/menu_items.json')
    });

    return response;
  }

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
