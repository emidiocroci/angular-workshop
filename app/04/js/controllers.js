'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','$http', function($scope, $http) {
        $http.get(serverAddress + '/posts')
            .success(function (data) {
                $scope.posts = data;
            })
            .error(function (data) {
                alert('error');
            });
        //TODO
        var socket = io.connect();
        socket.on('post', function (data) {
            $scope.$apply($scope.posts.unshift(data))              
        });

        $scope.sendMessage = function () {                        
            if ($scope.newPost.$valid) {
                //TODO
                socket.emit('post', { text: $scope.newPostText, author: , date: new Date() });
                $scope.newPostText = '';
            }
        };
    }]);
