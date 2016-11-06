(function () {
    "use strict";

    angular.module('public')
        .directive("validateMenuItem", ValidateMenuItemDirective);

    ValidateMenuItemDirective.$inject = ['$q', 'MenuService'];
    function ValidateMenuItemDirective($q, MenuService) {
        var ddo = {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$asyncValidators.invalidMenuItem = function (modelValue, viewValue) {
                    var menuShortName = viewValue;
                    var deferred = $q.defer();
              
                    MenuService.getMenuItemByShortName(menuShortName).then(function (result) {
                        if (result && result.short_name == menuShortName) {
                           deferred.resolve();
                        }
                    }, function (error) {
                        deferred.reject();
                    });

                    return deferred.promise;
                }
            }
        };
        return ddo;
    }


})();