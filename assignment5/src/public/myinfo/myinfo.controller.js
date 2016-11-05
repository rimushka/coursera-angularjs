(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['myinfo', 'favoriteMenuItem', 'ApiPath'];
function MyinfoController(myinfo, favoriteMenuItem, ApiPath) {
    var ctrl = this;
    ctrl.myinfo = myinfo;
    ctrl.favoriteMenuItem = favoriteMenuItem;
    ctrl.basePath = ApiPath;
}

})();