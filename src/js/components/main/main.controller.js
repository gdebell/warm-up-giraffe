(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$rootScope'];

  function mainController($rootScope) {
    console.log($rootScope);
  }
})();
