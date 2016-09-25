var app = angular.module('myApp', []);

app.controller('MainController',['$scope',function($scope){
  console.log("Hello World From AngularJS");

  var refresh = function () {
    $http.get('/contactlist').success(function (res){
      console.log("I got requested data!");

      $scope.contactlist = res;
      $scope.contact = "";
    });
  };

  $scope.addContact = function () {
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).success(function(res){
      console.log(res);
      refresh();
    });
  }

  $scope.remove = function (id) {
    console.log(id);
    $http.delete('/contactlist' + id).success(function (res) {
      refresh();
    });
  }

  $scope.edit = function (id) {
    console.log(id);
  }
}]);
