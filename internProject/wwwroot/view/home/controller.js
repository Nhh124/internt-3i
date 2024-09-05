// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope, $http) {
//     $scope.data = [];

//     $scope.getData = function() {
//         $http.get('https://jsonplaceholder.typicode.com/users')
//             .then(function(response) {
//                 $scope.data = response.data;
//             })
//             .catch(function(error) {
//                 console.error('Error fetching data:', error);
//             });
//     };
// });


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

  
    $scope.pageUrl = 'view/home/homePage.html';
});