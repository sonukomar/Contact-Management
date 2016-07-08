var app = angular.module('myApp', ["ui.bootstrap",'ui.bootstrap.typeahead']);

app.factory("States", function(){
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

  return states;

});


app.controller('dashboardController', function($scope,$http,States) {

/* setting variable flag to home initially */
$scope.pageName = 'home';

/* Initalizing type ahead source */
$scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado"];


$scope.loggedInUserName = "Sonu Kumar";

$scope.createNewContact = function(){

  if($scope.contactName && $scope.contactMobile && $scope.contactPhone && $scope.contactEmail){
    var newContactObj = {

        "name":   $scope.contactName,
        "mobile": $scope.contactMobile,
        "phone":  $scope.contactPhone,
        "email":  $scope.contactEmail,
        "price":"48000"
    }

    $scope.contactDetails.push(newContactObj);
    $('#addNewUser').modal('hide')

    setTimeout(function()
      {
        $('.autoHide').fadeOut('slow');
      }, 2000);

      $('.autoHide').fadeIn('fast');

    $scope.successFlag  = true;
    $scope.successMsg   = 'Successfully Added to contacts.';
  }
  else{
    $scope.successFlag  = false;
    $scope.successMsg   = '';
    $scope.errorFlag    = true;
    $scope.errorMsg     = 'All fields are required.';
  }
}

$scope.removeContact = function(deletionIndex){
  $scope.contactDetails.splice(deletionIndex,1);

  setTimeout(function()
    {
      $('.autoHide').fadeOut('slow');
    }, 2000);

    $('.autoHide').fadeIn('fast');

  $scope.successFlag  = true;
  $scope.successMsg   = 'Successfully Deleted.';

}

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
