'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','$http', function($scope, $http) {
        var serverAddress = 'http://angularworkshop-degobah.rhcloud.com';
        var username = 'guest';

        $http.get(serverAddress + '/posts')
            .success(function (data) {
                $scope.posts = data;
            })
            .error(function (data) {
                alert('error');
            });

        var socket = io.connect(serverAddress);
        socket.on('post', function (data) {
            $scope.$apply($scope.posts.unshift(data))
        });

        $scope.sendMessage = function () {
            if ($scope.newPost.$valid) {
                socket.emit('post', { text: $scope.newPostText, author: username, date: new Date() });                
            }
        };
    }]);
