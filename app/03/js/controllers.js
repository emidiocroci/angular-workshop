'use strict';

/* Controllers */

angular.module('blog.controllers', [])
    .controller('PostCtrl', ['$scope','$http', function($scope, $http) {
        var serverAddress = 'http://localhost:3000';
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

         $scope.sendMessage = function (event) {
            if (event.keyCode &&
                event.keyCode === 13 &&
                event.currentTarget.value) {
                socket.emit('post', { text: event.currentTarget.value , author: 'emidio', date: new Date() });
                event.currentTarget.value = '';
            }
         };
    }]);
