// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var barcode = angular.module('starter', ['ionic','ngCordova','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
barcode.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("firebase", {
      url: "/firebase",
      templateUrl: "templates/firebase.html",
      controller: "FirebaseController",
      cache: false
    })
    .state("secure", {
      url: "/secure",
      templateUrl: "templates/secure.html",
      controller: "SecureController"
    });
  $urlRouterProvider.otherwise('/firebase');
});

barcode.controller("FirebaseController", function($scope, $state, $firebaseAuth) {

  var fbAuth = $firebaseAuth();

  $scope.login = function(username, password) {
    fbAuth.$signInWithEmailAndPassword(username,password).then(function(authData) {
      $state.go("secure");
    }).catch(function(error) {
      console.error("ERROR: " + error);
    });
  }

  $scope.register = function(username, password) {
    fbAuth.$createUserWithEmailAndPassword(username,password).then(function(userData) {
      return fbAuth.$signInWithEmailAndPassword(username,
        password);
    }).then(function(authData) {
      $state.go("secure");
    }).catch(function(error) {
      console.error("ERROR: " + error);
    });
  }

});

barcode.controller("barController",function($scope,$cordovaBarcodeScanner){
  $scope.scanBarcode = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      alert(imageData.text);
      console.log("format" +imageData.format);
    }, function(error){
      console.log("error occured" +error);
    });
  }
});
