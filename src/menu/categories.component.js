(function () {
    'use strict';
    
    angular.module('Data')
    .component('categoriesList', {
      templateUrl: 'src/menu/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
    
})();