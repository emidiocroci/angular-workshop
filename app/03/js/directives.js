'use strict';

/* Directives */


angular.module('blog.directives', [])
    .directive('onEnter', function () {
        return {
            restrict: ''//TODO,
            scope: {
                //TODO
            },
            link: function (scope, element, attrs) {
                element.bind('keypress', function (event) {
                    //TODO
                });
            }
        };
    })
    .directive('singlePost', function () {
        return {
            restrict: ''//TODO,
            template: ''//TODO, 
            scope: {
                
            },
            replace: true
        };
    });
