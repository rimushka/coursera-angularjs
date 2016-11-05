(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyinfoService'];
function SignupController(MyinfoService) {
   var signupCtrl = this;

   signupCtrl.submit = function() {
     signupCtrl.completed = true;
     console.log(signupCtrl.user);
     MyinfoService.saveMyinfo(signupCtrl.user);
   };

} 

})();