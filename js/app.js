/* setup your angular app here */
var app = angular.module('myApp', []);
 // $scope.random = function() {
 //    return 0.5 - Math.random();
 //  };
app.controller('foodCtrl', ['$scope', function($scope) {

  $scope.foodArray = fruits.concat(vegetables);
  $scope.fruitHolder = [];
  $scope.vegHolder = [];
  console.log(fruits + vegetables);

  $scope.moveRightFromMid = function(idx) {
    temp = $scope.foodArray.splice(idx, 1).toString();
    $scope.vegHolder.push(temp);
    $scope.winCheck();
    return;
  };
  $scope.moveLeftFromMid = function(idx) {
    temp = $scope.foodArray.splice(idx, 1).toString();
    $scope.fruitHolder.push(temp);
    $scope.winCheck();
    return;
  };
  $scope.moveRight = function(idx) {
    temp = $scope.fruitHolder.splice(idx, 1).toString();;
    $scope.foodArray.push(temp);
    $scope.winCheck();
    return;
  };
  $scope.moveLeft = function(idx) {
    temp = $scope.vegHolder.splice(idx, 1).toString();;
    $scope.foodArray.push(temp);
    $scope.winCheck();
    return;
  };

  $scope.moveUpMid = function(idx) {
    console.log($scope.foodArray[idx]);
    if($scope.foodArray[idx] !== 0) {
      temp = $scope.foodArray[idx];
      temp2 = $scope.foodArray[idx - 1];
      $scope.foodArray[idx] = temp2;
      $scope.foodArray[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.foodArray;
  };

  $scope.moveUpRight = function(idx) {
    if($scope.vegHolder[idx] !== 0) {
      temp = $scope.vegHolder[idx];
      temp2 = $scope.vegHolder[idx - 1];
      $scope.vegHolder[idx] = temp2;
      $scope.vegHolder[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.veghHolder;
  };

  $scope.moveUpLeft = function(idx) {
    if($scope.fruitHolder[idx] !== 0) {
      temp = $scope.fruitHolder[idx];
      temp2 = $scope.fruitHolder[idx - 1];
      $scope.fruitHolder[idx] = temp2;
      $scope.fruitHolder[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.fruitHolder;
  };

  $scope.moveDownMid = function(idx) {
    if($scope.foodArray[idx] !== $scope.foodArray.length - 1) {
      console.log('in')
      temp = $scope.foodArray[idx];
      console.log(temp)
      console.log($scope.foodArray)
      temp2 = $scope.foodArray[idx + 1];
      $scope.foodArray[idx] = temp2;
      $scope.foodArray[idx + 1] = temp;
    }
    $scope.winCheck();
    return $scope.foodArray;
  };
  $scope.moveDownLeft = function(idx) {
    if($scope.fruitHolder[idx] !== $scope.foodArray.length - 1) {
      temp = $scope.fruitHolder[idx];
      temp2 = $scope.fruitHolder[idx + 1];
      $scope.fruitHolder[idx] = temp2;
      $scope.fruitHolder[idx + 1] = temp;
    }
    $scope.winCheck();
    return $scope.fruitHolder;
  };
  $scope.moveDownRight = function(idx) {
    if($scope.vegHolder[idx] !== $scope.foodArray.length - 1) {
      console.log('hi')
      temp = $scope.vegHolder[idx];
      temp2 = $scope.vegHolder[idx + 1];
      $scope.vegHolder[idx] = temp2;
      $scope.vegHolder[idx + 1] = temp;
    }
    $scope.winCheck();
    return $scope.vegHolder;
  };

  $scope.winCheck = function() {
    if ($scope.foodArray.length === 0) {
      temp = $scope.vegHolder;
      temp = temp.toString();
      vegtemp = vegetables.toString();
      if(temp === vegtemp) {
        console.log(temp + ' vegholder');
        alert('veg wins;D');
        return;
      };
      temp2 = $scope.fruitHolder;
      temp2 = temp2.toString();
      fruittemp = fruits.toString();
      if(temp2 === fruittemp) {
        console.log(temp2 + ' fruitholder');
        alert('fruit wins;D');
        return;
      };
    };
  };





}]);

