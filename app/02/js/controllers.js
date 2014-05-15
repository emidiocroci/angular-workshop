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
        TODO: devo usare la funzione qui sotto per inviare il post alla pressione su enter...
        function (event) {
            if (event.keyCode &&
                event.keyCode === 13 &&
                event.currentTarget.value) {
                socket.emit('post', { text: event.currentTarget.value , author: username, date: new Date() });
                event.currentTarget.value = '';
            }
        };*/
    }]);
