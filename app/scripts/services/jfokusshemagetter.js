'use strict';

/**
 * @ngdoc service
 * @name jfokus2016ScheduleApp.jfokusShemaGetter
 * @description
 * # jfokusShemaGetter
 * Service in the jfokus2016ScheduleApp.
 */
angular.module('jfokus2016ScheduleApp').service('jfokusShemaGetter', function($http, $log) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.get = function() {
    /*
    $http({
      method: 'GET',
      url: 'http://www.jfokus.se/jfokus/schedule.jsp'
    }).then(function successCallback(response) {
      $log.info('response='+JSON.stringify(response));
    }, function errorCallback(response) {
      throw 'jfokus not responding... response='+JSON.stringify(response);
    });
    */
    $http.jsonp('http://www.jfokus.se/jfokus/schedule.jsp')
    .success(function(data){
      $log.info(data)
    });
  };
});
