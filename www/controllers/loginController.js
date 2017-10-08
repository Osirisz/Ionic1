angular.module('starter')
.controller('loginController', function($scope, $state, $http) {
  console.log('test');
  $http.get('http://www.senchabox.com/ionic/www_web_api/webservice/ws_list.php')
    .then(function(res){
      console.log(res.data.results);
      $scope.myDataArray = res.data.results;
    },function(err){
      console.log(err)
    }
  )
  // $scope.myDataArray = [
  //   {
  //     name: 'Noraset',
  //     nick: 'Earthz',
  //     social: 'AiPEN',
  //     mobile: '123456789'
  //   },
  //   {
  //     name: 'Osirisz',
  //     nick: 'Earthz',
  //     social: 'AiPEN',
  //     mobile: '123456789'
  //   }
  // ];
  $scope.myName = 'Earth';
  $scope.btnGo = function(){
    console.log('btnGo');
    $state.go('about');
  }
  $scope.logList = function(data){
    console.log(data);
    $state.go('about', {
      name:data.name,
      nick:data.nick,
      social:data.social,
      mobile:data.mobile
    });
  }
})