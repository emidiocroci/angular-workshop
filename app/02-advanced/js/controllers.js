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
            //TODO data è il post ricevuto dal server { text: ...., author: .... }
        });

        /*
        TODO chiamata socket.io per invio post
        socket.emit('post', { text: event.currentTarget.value , author: username, date: new Date() });
        };*/
    }]);
