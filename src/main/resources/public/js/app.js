var auth = 'Basic WjhlYWYyam1ZOEY1TG90WnJaZHQxbVlKdUVWUStuN1hyckUzL3RTT05tODpaOGVhZjJqbVk4RjVMb3RaclpkdDFtWUp1RVZRK243WHJyRTMvdFNPTm04';

$('body').bind('touchmove', function(e) {
  e.preventDefault()
});

angular.module('hottrade', ['gajus.swing', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

})

.controller('SwipeCardsCtrl', function($scope, $http) {

  $scope.matches = [];
  $http.get('/api/industry/Technology').success(function(data) {
    $scope.matches = data;
  });

  $scope.swipeLeft = function(index) {
    console.log(index);
    $scope.matches.splice(index, 1);
  };

  $scope.swipeRight = function(index) {
    console.log(index);
    $scope.matches.splice(index, 1);
  };

});
