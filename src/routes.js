(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categorise', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categoriesList.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('category.items', {
    url: '/category/{categoryShortName}',
    templateUrl: 'src/menu/templates/items.template.html',
    controller: 'CategoryItemsController as items',
    resolve: {
      items:  [ '$stateParams' ,'MenuDataService', function (stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory(stateParams.categoryShortName);
      }]
    }
  });

}

})();
