'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

  	$scope.time = new Date();

  }])
  .controller('MyCtrl2', [function() {

  }]);