(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
    //template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">Categories</a><ui-view></ui-view>'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categoriesList.template.html',
    //template: '<a ui-sref="home">Home</a> &lt; <span>Categories</span><categories-list categories="categories.categories"></categories-list><ui-view></ui-view>',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/categories/{categoryShortName}/category-items',
    templateUrl: 'src/menu/templates/items.template.html',
    //template: '<a ui-sref="home">Home</a> &lt; <a ui-sref="categories">Categories</a> &lt; <span>Items</span><category-items items="items.items"></category-items><ui-view></ui-view>',
    controller: 'CategoryItemsController as items',
    resolve: {
      items:  [ '$stateParams' ,'MenuDataService', function (stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory(stateParams.categoryShortName);
      }]
    }
  });

}

})();
