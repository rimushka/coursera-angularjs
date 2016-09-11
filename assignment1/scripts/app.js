(function () {
  'use strict';

  angular.module('LunchCheckerApp', [])
    .controller('LunchMenuController', LunchMenuController);

  LunchMenuController.$inject = ['$scope'];
  function LunchMenuController($scope) {
    $scope.lunchMenu = "";
    $scope.menuEvaluation = "";

    $scope.checkMenu = function () {
      var unparsedMenu = $scope.lunchMenu.trim();

      var parsedMenu = unparsedMenu.split(",").filter(function (item) {
        return item.trim().length > 0;
      });

      if (parsedMenu.length === 0) {
        $scope.menuEvaluation = "Please enter data first";
      } else if (parsedMenu.length <= 3) {
        $scope.menuEvaluation = "Enjoy!";
      } else {
        $scope.menuEvaluation = "Too much!";
      }

    };
  }

})();
