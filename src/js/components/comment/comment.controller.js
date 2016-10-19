(function() {
  'use strict';

  angular
    .module('myApp.components.new', [])
    .controller('commentController', commentController);

  commentController.$inject = ['$rootScope', '$location'];

  function commentController($rootScope, $location) {
    /*jshint validthis: true */
    console.log('you made it to comment controller!!');
  }

})();
