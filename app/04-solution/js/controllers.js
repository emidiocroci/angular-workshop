'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','$http','globals', function($scope, $http, globals) {
        $http.get(globals.serverAddress + '/posts')
            .success(function (data) {
                $scope.posts = data;
            })
            .error(function (data) {
                alert('error');
            });

        var socket = io.connect(globals.serverAddress);
        socket.on('post', function (data) {
            $scope.$apply($scope.posts.unshift(data))
        });

        $scope.sendMessage = function () {
            if ($scope.newPost.$valid) {
                socket.emit('post', { text: $scope.newPostText, author: globals.username, date: new Date() });
                $scope.newPostText = '';
            }
        };
    }]);
