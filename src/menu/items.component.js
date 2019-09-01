(function () {
    'use strict';
    
    angular.module('Data')
    .component('categoryItems', {
      //templateUrl: 'src/menu/templates/items.template.html',
      template: '<ul><li ng-repeat="item in $ctrl.items">({{ item.short_name }}): {{ item.name }} - {{ item.description }}</li></ul>',
      bindings: {
        items: '<'
      }
    });
    
})();