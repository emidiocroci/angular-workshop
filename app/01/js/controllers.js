'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','$http', function($scope, $http) {
        var serverAddress = 'http://angularworkshop-degobah.rhcloud.com';
        $http.get(serverAddress + '/posts')
            .success(function (data) {
                //TODO
            })
            .error(function (data) {
                alert('error');
            });
    }]);
