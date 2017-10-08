angular.module('starter')
.controller('aboutController', function($scope, $stateParams) {
  console.log('test');
  console.log('aboutController');
  console.log($stateParams);
  $scope.myData = $stateParams;
});