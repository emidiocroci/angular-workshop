'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('blog.services', [])
    .service('globals', function () {
        this.username = 'emidio';
        this.serverAddress = 'http://localhost:3000';
    })
    .value('version', '0.1');
