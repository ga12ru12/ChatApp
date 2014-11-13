angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
    })

    //Controller ChatBoard Page
    .controller('ChatCtrl', function($scope, User, socket){
        $scope.chatAction = function(data){
            addContent('Me', data);
            socket.emit('chat',{message: data, user: User.getUser().username});
        }

        socket.on('chat', function(data){
            console.log(data);
            addContent(data.user, data.message);
        });

        function addContent(name, content){
            $jq('.chatBoard .contentChat').append('<div><label>'+name+': </label><span>'+content+'</span></div>');
        }
    })

    //Controller Info Page
    .controller('InfoCtrl', function ($scope, User) {
        $scope.username = User.getUser().username;
        $scope.phoneNumber = User.getUser().phoneNumber;
    });
