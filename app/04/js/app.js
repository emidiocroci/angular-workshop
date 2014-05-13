'use strict';


// Declare app level module which depends on filters, and services
angular.module('blog', [
  'ngRoute',
  'blog.filters',
  'blog.services',
  'blog.directives',
  'blog.controllers'
]);
/*.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/
