(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
function CategoryItemsController($stateParams, MenuDataService, items) {
  var ctrl = this;
  ctrl.categoryName = $stateParams.categoryName;
  console.log($stateParams.categoryName);
  ctrl.items = items.data.menu_items;
}

})();
