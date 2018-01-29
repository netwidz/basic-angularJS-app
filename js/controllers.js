var productControllers = angular.module('productControllers' , []);

productControllers.controller('listController',['$scope','$http', function listController($scope, $http){

    $http.get('js/data.json').success(function(data){
        $scope.products = data;
        $scope.productOrder= "price";
    });


}]);
