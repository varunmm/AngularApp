angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchname   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'lokesh', type: 'awesome 1', marks: 100 },
    { name: 'vicky', type: 'awesome 2', marks: 100 },
    { name: 'avinesh', type: 'awesome 3', marks: 100 },
    { name: 'siddu', type: 'awesome 4', marks: 100},
    { name: 'sikki', type: 'awesome 5', marks: 100}
  ];
  
});