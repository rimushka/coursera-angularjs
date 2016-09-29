(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'found',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.narrowItDown = function () {
     if (ctrl.searchTerm && ctrl.searchTerm.trim().length > 0) {
       
       MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.trim()).then( function (result) {
         ctrl.found = result;
       })
       .catch(function (error) {
         console.log(error);
       });

     } else {
       ctrl.found = [];
     }
  };

  ctrl.removeItem = function (index) {
    ctrl.found.splice(index, 1);
  }

}

MenuSearchService.$inject = ['$q','$http']
function MenuSearchService($q, $http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return service.menu().then(function (data) {
        return data.filter(function (item) {
          return item.description !== undefined && item.description.indexOf(searchTerm.toLowerCase()) != -1;
        });
    })
  };

  service.menu = function() {
    var deferred = $q.defer();

    if (service.cached_menu) {
      deferred.resolve(service.cached_menu);
    } else {
      $http({ method: "GET", url: ("https://davids-restaurant.herokuapp.com/menu_items.json")}).then(function (response) {
        service.cached_menu = response.data.menu_items;
        deferred.resolve(service.cached_menu)
      });
    }

    return deferred.promise;
  };
}

})();
