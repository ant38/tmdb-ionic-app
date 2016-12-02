/**
 * @memberOf app.states.home
 */
(function (module) {
  'use strict';

  function HomeController($scope, statesService) {
    var controller = this;
    
    $scope.search = { query: '', results: []};

    controller.search = function() {
      statesService.search().then(function($scope.search.query) {
        console.log($scope.search.query);
        $scope.search.results = $scope.search.query;
      });
    };
    
  }

  module.controller('homeController', [
    '$scope',
    'statesService',
    HomeController
  ]);

}(angular.module('app.states.home')));
