(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['$stateParams', 'MenuDataService', 'categoryName', 'items'];
function CategoryItemsController($stateParams, MenuDataService, categoryName, items) {
  var ctrl = this;
  ctrl.categoryName = categoryName;
  console.log($stateParams.categoryName);
  ctrl.items = items.data.menu_items;
}

})();
