(function() {

  'use strict';

  angular
    .module('myApp.components.new', [])
    .controller('newAnimalController', newAnimalController);

  newAnimalController.$inject = ['$rootScope', '$location'];

  function newAnimalController($rootScope, $location) {
    /*jshint validthis: true */
    console.log('root scope in new animal controllers', $rootScope);
    this.submitNew = function(data) {
      //console.log('you hit the submit new route!!');
      //console.log(data.name);
      $rootScope.giraffesArray.push({
        name: data.name,
        biography: data.biography,
        likes: data.likes,
        url: data.url
      });
      $location.path('/');
    };
  }
})();
