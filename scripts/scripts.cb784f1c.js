"use strict";angular.module("jfokus2016ScheduleApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$httpProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{controller:function(){window.location.replace("http://github.com/jensim")},template:"<div></div>"}).otherwise({redirectTo:"/"}),b.defaults.useXDomain=!0,b.defaults.withCredentials=!0,delete b.defaults.headers.common["X-Requested-With"],b.defaults.headers.common.Accept="application/json",b.defaults.headers.common["Content-Type"]="application/json"}]),angular.module("jfokus2016ScheduleApp").controller("MainCtrl",["jfokusShemaGetter",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.get()}]),angular.module("jfokus2016ScheduleApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jfokus2016ScheduleApp").service("jfokusShemaGetter",["$http","$log",function(a,b){this.get=function(){a({method:"GET",url:"http://www.jfokus.se/jfokus/schedule.jsp"}).then(function(a){b.info("response="+JSON.stringify(a))},function(a){throw"jfokus not responding... response="+JSON.stringify(a)})}}]),angular.module("jfokus2016ScheduleApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>JFokus 2016 Schedule</h1> </div>')}]);