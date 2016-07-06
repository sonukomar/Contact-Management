var app = angular.module('myApp', []);
app.controller('dashboardController', function($scope,$http) {

/* setting variable flag to home initially */
$scope.pageName = 'home';


/* Navigation function */
$scope.naviagateMe = function(naviagtionLocation){
  if(naviagtionLocation == 'home'){
    $scope.pageName = 'home';
  }
  if(naviagtionLocation == 'books'){
    $scope.pageName = 'books';
  }
  if(naviagtionLocation == 'about'){
    $scope.pageName = 'about';
  }
  if(naviagtionLocation == 'contact'){
    $scope.pageName = 'contact';
  }
}


$scope.addUser = function(){
  angular.element(document.querySelector('#copyAll')).attr("data-toggle","modal");
  angular.element(document.querySelector('#copyAll')).attr("data-target","#copyMessage");
}


  $(".wrapper").css("display","block");

  $http.get("static/data/contacts.json")
  .success(function(response) {

    $scope.contactDetails = response.contact;
      setTimeout(
        function(){$(".wrapper").css("display","none"); },2000);

  });
});
