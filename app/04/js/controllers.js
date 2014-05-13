'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','posts','globals', function($scope, posts, globals) {
        $scope.posts = posts;                    
        
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
