(function () {
  'use strict';

  angular.module('Data')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['$stateParams', 'MenuDataService','items'];
  function CategoryItemsController($stateParams, MenuDataService, items) {
    var menu = this;
    menu.items = items;
  }

})();
