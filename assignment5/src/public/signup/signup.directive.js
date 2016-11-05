(function () {
    "use strict";

    angular.module('public')
    .directive("validateMenuItem", ValidateMenuItemDirective);

    ValidateMenuItemDirective.$inject = ['MenuService'];
    function ValidateMenuItemDirective(MenuService) {
        var ddo = {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, controller) {
                controller.$parsers.unshift(function (value) {
                    if (value) {
                        MenuService.getMenuItemByShortName(value).then(function (result) {
                            controller.$setValidity('validMenuItem', (result && result.short_name == value) ? true : false);
                        }, function (error) {
                            controller.$setValidity('validMenuItem', false);
                        });
                    }

                    return value;
                });
            }
        };
        return ddo;
    }


})();