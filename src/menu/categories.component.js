(function () {
    'use strict';
    
    angular.module('Data')
    .component('categoriesList', {
      //templateUrl: 'src/menu/templates/categories.template.html',
      template: '<ul><li ng-repeat="item in $ctrl.categories"ui-sref="items({categoryShortName: item.short_name})">({{ item.short_name }}): {{ item.name }}</li></ul>',
      bindings: {
        categories: '<'
      }
    });
    
})();