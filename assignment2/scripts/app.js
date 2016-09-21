(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  
  toBuy.list = ShoppingListCheckOffService.getToBuyItems();
  
  toBuy.markItemAsBought = function (index) {
    ShoppingListCheckOffService.markItemAsBought(index);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  
  alreadyBought.list = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems =  [{ name: "milk cartons", quantity: 3 },
                { name: "bread loaves", quantity: 2 },
                { name: "coffee cans", quantity: 2 },
                { name: "cheese packages", quantity: 4 },
                { name: "steak slices", quantity: 3 }];

  var boughtItems = [];

  service.markItemAsBought = function (index) {
    var removed = toBuyItems.splice(index, 1);    
    boughtItems.push(removed[0]);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }
}

})();
