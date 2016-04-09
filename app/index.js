const angular = require('angular');
// angular is old: 5-6 years old:
const app = angular.module('practiceApp', []);

app.controller('practiceController', ['$http', function($http) {
  this.clearSearch = function() {
    this.message = "";
  }
}]);
