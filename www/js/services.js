angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            {id: 0, name: 'Scruff McGruff'},
            {id: 1, name: 'G.I. Joe'},
            {id: 2, name: 'Miss Frizzle'},
            {id: 3, name: 'Ash Ketchum'}
        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    })
    .factory('socket', function ($rootScope) {
        var socket = io.connect('http://nodejs-ga12ru12.rhcloud.com:8443');
        socket.on('error', function () {
            alert('Connect to server fail');
        });
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                run();
                function run() {
                    socket.emit(eventName, data, function () {
                        var args = arguments;
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback.apply(socket, args);
                            }
                        });
                    })
                };
            }
        };
    })
    .factory('User', function(){
        var user = {
            username    : 'Guest '+ new Date().getTime(),
            phoneNumber : 123456789
        }
        return {
            setUser: function(username, phoneNumber){
                if(username) user.username = username;
                if(phoneNumber) user.phoneNumber = phoneNumber;
                return user;
            },
            getUser: function(){
                return user;
            }
        };
    });
