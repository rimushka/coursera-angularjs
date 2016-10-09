(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService)
.constant('MENU_DATA_BASE_URL', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$q','$http', 'MENU_DATA_BASE_URL']
function MenuDataService($q, $http, MENU_DATA_BASE_URL) {
  var service = this;
 
  service.getAllCategories = function () {
    return $http({ method: "GET", url: (MENU_DATA_BASE_URL + "categories.json")});               
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({ method: "GET", url: (MENU_DATA_BASE_URL + "menu_items.json?category=" + categoryShortName)});
  };

}

})();
