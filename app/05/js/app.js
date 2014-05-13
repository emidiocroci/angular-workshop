'use strict';


// Declare app level module which depends on filters, and services
angular.module('blog', [
  'ngRoute',
  'blog.filters',
  'blog.services',
  'blog.directives',
  'blog.controllers'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './partials/posts.html',
        controller: 'PostCtrl',
        resolve: {
            posts: function ($q, $http, globals) {
                var deferred = $q.defer();
                var promise = $http.get(globals.serverAddress + '/posts')
                    .success(function (data) {  
                        deferred.resolve(data);                        
                    })
                    .error(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        }
    });
}]);
/*.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/
