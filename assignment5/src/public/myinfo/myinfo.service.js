(function () {
"use strict";

angular.module('public')
.service('MyinfoService', MyinfoService);

function MyinfoService() {
    var service = this;
    var myinfo = null;

    service.saveMyinfo = function (info) {
       myinfo = info;
    }

    service.getMyinfo = function () {
       return myinfo;
    }

}

})();