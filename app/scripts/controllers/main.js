'use strict';

/**
 * @ngdoc function
 * @name jfokus2016ScheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jfokus2016ScheduleApp
 */
angular.module('jfokus2016ScheduleApp').controller('MainCtrl', ['jfokusShemaGetter',function(jfokusShemaGetter) {
  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
  jfokusShemaGetter.get();
}]);
