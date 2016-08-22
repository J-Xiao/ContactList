var app = angular.module('myApp', []);

app.controller('MainController',['$scope',function($scope){
  console.log("Hello World From AngularJS");

  $http.get('/contactlist').success(function (res){
    console.log("I got requested data!");

    $scope.contactlist = res;
    $scope.contact = "";
  })

  $scope.addContact = function () {
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).success(function(res){
      console.log(res);
    });
  }
}]);
