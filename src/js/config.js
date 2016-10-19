(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function mainController($rootScope) {
      //console.log('root scope main', $rootScope);
      /*jshint validthis: true */
      $rootScope.id = 1;
      $rootScope.giraffesArray = [{
        id: $rootScope.id++,
        name: 'Nora',
        biography: 'Nora loves to play.',
        url: 'https://kidskonnect.com/assets/uploads/2014/12/giraffe-featured.jpg',
        likes: 9,
        comments: [
          {id: $rootScope.id++,
          userName: 'Gina',
          comment: 'Nora is a friendly giraffe.'},
          {id: $rootScope.id++,
          userName: 'Scott',
          comment: 'Nora is the sweetest giraffe at the Denver Zoo.'}
        ]
      },
      {
        id: $rootScope.id++,
        name: 'Basil',
        biography: 'Basil eats like a horse.',
        url: 'https://www.theanimalprintshop.com/images/P/Baby-Giraffe_art-for-nursery-01.jpg',
        likes: 8,
        comments: [
          {id: $rootScope.id++,
          userName: 'Akiko',
          comment: 'Basil is sweet.'}
        ]
      },
      {
        id: $rootScope.id++,
        name: 'Hank',
        biography: 'Hank is very playful when he is not sleeping.',
        url: 'http://factoflife.net/upload/images/20160617/baby-giraffe-facts.png',
        likes: 10,
        comments: [
          {id: $rootScope.id++,
          userName: 'Alias',
          comment: 'Hank loves to eat!'}
        ]
      }];
    });

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: 'js/components/new/new.view.html',
      controller: 'newAnimalController',
      controllerAs: 'newCtrl'
    })
    .when('/comments/:id', {
      templateUrl: 'js/components/comment/comment.view.html',
      controller: 'commentController',
      controllerAs: 'newComm'
    })
    .otherwise('/');
  }

})();
