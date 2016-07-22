/* setup your angular app here */
var app = angular.module('myApp', []);
var anotherboolean = false;
var boolean = false;

function shuffle(array) {
  var i = 0,
      j = 0,
      temp = null;
  for (i = array.length - 1; i >= 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    console.log('new for loop iteration');
    console.log(j + ' j');
    temp = array[i];
    console.log(temp + ' temp');
    array[i] = array[j];
    console.log(array[i] + ' array i');
    array[j] = temp;
    console.log(array[j] + ' array j');
  };
};

app.controller('foodCtrl', ['$scope', function($scope) {

  $scope.foodArray = fruits.concat(vegetables);
  shuffle($scope.foodArray);
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
    if($scope.foodArray[idx] !== $scope.foodArray[0]) {
      temp = $scope.foodArray[idx];
      temp2 = $scope.foodArray[idx - 1];
      $scope.foodArray[idx] = temp2;
      $scope.foodArray[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.foodArray;
  };

  $scope.moveUpRight = function(idx) {
    if($scope.vegHolder[idx] !== $scope.vegHolder[0]) {
      temp = $scope.vegHolder[idx];
      temp2 = $scope.vegHolder[idx - 1];
      $scope.vegHolder[idx] = temp2;
      $scope.vegHolder[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.veghHolder;
  };

  $scope.moveUpLeft = function(idx) {
    if($scope.fruitHolder[idx] !== $scope.fruitHolder[0]) {
      temp = $scope.fruitHolder[idx];
      temp2 = $scope.fruitHolder[idx - 1];
      $scope.fruitHolder[idx] = temp2;
      $scope.fruitHolder[idx - 1] = temp;
    }
    $scope.winCheck();
    return $scope.fruitHolder;
  };

  $scope.moveDownMid = function(idx) {
    if($scope.foodArray[idx] !== $scope.foodArray[$scope.foodArray.length - 1]) {
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
    if($scope.fruitHolder[idx] !== $scope.fruitHolder[$scope.fruitHolder.length - 1]) {
      temp = $scope.fruitHolder[idx];
      temp2 = $scope.fruitHolder[idx + 1];
      $scope.fruitHolder[idx] = temp2;
      $scope.fruitHolder[idx + 1] = temp;
    }
    $scope.winCheck();
    return $scope.fruitHolder;
  };

  $scope.moveDownRight = function(idx) {
    if($scope.vegHolder[idx] !== $scope.vegHolder[$scope.vegHolder.length - 1]) {
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
      temp = $scope.vegHolder;
      temp = temp.toString();
      vegtemp = vegetables.toString();
      if(temp === vegtemp && boolean === false) {
        console.log(temp + ' vegholder');
        alert('veg wins;D');
        boolean = true;
        return;
      };
      temp2 = $scope.fruitHolder;
      temp2 = temp2.toString();
      fruittemp = fruits.toString();
      if(temp2 === fruittemp && anotherboolean === false) {
        console.log(temp2 + ' fruitholder');
        alert('fruit wins;D');
        anotherboolean = true;
        return;
      };
  };

  $scope.colorChange = function(idx, array) {
    if($scope.foodArray.length === 0) {
      if(array === 'fruitHolder') {
        if(array.indexOf(idx) === -1) {
          console.log('color checker');
          return true;
        }else{
          return false;
        };
      };
    };
  };

}]);

