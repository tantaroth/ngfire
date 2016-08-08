(function() {
  'use strict';

  angular
    .module('workspace')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $log, $firebaseArray) {
    var vm = this,
      ref = firebase.database().ref().child("data");
    // download the data into a local object
    vm.data = $firebaseArray(ref);
    
    vm.addData = function() {
      vm.data.$add({
        text: vm.data.text
      });
    };
  }
})();
