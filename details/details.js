/**
 * Created by Administrator on 2017/10/31.
 */
(function (angular) {
    angular.module('details',['ngRoute','myservice']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/subject/:mid',{
            templateUrl:'details/details.html',
            controller:'detailsContr'
        })
    }]).controller('detailsContr',['$scope','$routeParams','myserve',function ($scope,$routeParams,myserve) {
        $scope.isok=true;
        myserve.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.mid,{}, function (data) {
            $scope.data=data;
            $scope.isok=false;
            $scope.$apply();
        })
    }])

})(angular)