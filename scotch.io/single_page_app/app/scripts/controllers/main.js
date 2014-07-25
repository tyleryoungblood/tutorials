'use strict';

/**
 * @ngdoc function
 * @name singlePageAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the singlePageAppApp
 */
angular.module('singlePageAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
