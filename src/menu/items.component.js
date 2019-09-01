(function () {
    'use strict';
    
    angular.module('Data')
    .component('categoryItems', {
      templateUrl: 'src/menu/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
})();