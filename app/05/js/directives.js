'use strict';

/* Directives */


angular.module('blog.directives', [])
    .directive('onEnter', function () {
        return {
            restrict: 'A',
            scope: {
                onEnter: '&'
            },
            link: function (scope, element, attrs) {
                element.bind('keypress', function (event) {
                    if (event.keyCode === 13) {
                        scope.onEnter();
                        element.value = '';
                    }
                });
            }
        };
    })
    .directive('singlePost', function () {
        return {
            restrict: 'E',
            template: '<div class="post"> \
                            <h5>{{post.author}} <small>{{post.date | date: \'short\'}}</small></h5> \
                            <p>{{post.text}}</p> \
                        </div>',
            scope: {
                post: '='
            },
            replace: true
        };
    });
