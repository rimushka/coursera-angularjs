(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService)
.constant('MENU_DATA_BASE_URL', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$q','$http', 'MENU_DATA_BASE_URL']
function MenuDataService($q, $http, MENU_DATA_BASE_URL) {
  var service = this;
 
  service.getAllCategories = function () {
    var deferred = $q.defer();
    
    if (service.cachedCategories) {
      deferred.resolve(service.cachedCategories);
    } else {
      $http({ method: "GET", url: (MENU_DATA_BASE_URL + "categories.json")}).then(function (response) {
        service.cachedCategories = response.data;
        deferred.resolve(service.cachedCategories);
      });
      
    }

    return deferred.promise;            
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({ method: "GET", url: (MENU_DATA_BASE_URL + "menu_items.json?category=" + categoryShortName)});
  };

  service.getCategoryName = function (categoryShortName) {
    return service.getAllCategories().then(function (categories) {
        var categoryMatch = categories.find(function (category){
           return category.short_name === categoryShortName;
        });
        return categoryMatch.name;
    });
  };

}

})();
