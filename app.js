var bolls = angular.module('arroz',[]);
bolls.controller('formController', function($scope) {
    console.log("hello my controller");
    $scope.formData = {};

    $scope.complementar = function() {
        console.log("teste");
        console.log(1-this.formData);
    }
})
