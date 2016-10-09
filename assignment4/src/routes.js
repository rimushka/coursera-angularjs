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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories-main.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories(); 
      }]
    }
  })

  .state('category', {
    url: '/category/{shortName}',
    templateUrl: 'src/menuapp/templates/category-items.template.html',
    controller: 'CategoryItemsController as categoryItemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }],
      categoryName: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
               return MenuDataService.getCategoryName($stateParams.shortName);
            }]
    }
  });
}

})();
