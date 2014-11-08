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

    //Controller Info Page
    .controller('InfoCtrl', function ($scope, User) {
        $scope.username = User.getUser().username;
        $scope.phoneNumber = User.getUser().phoneNumber;
        $scope.$apply();
    });
