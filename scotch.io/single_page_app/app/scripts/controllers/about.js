'use strict';

/**
 * @ngdoc function
 * @name singlePageAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the singlePageAppApp
 */
angular.module('singlePageAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
