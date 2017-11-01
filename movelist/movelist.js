/**
 * Created by Administrator on 2017/10/31.
 */
(function (angular) {
    angular.module('movelist',['ngRoute','myservice']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:movelist/:page?',{
            templateUrl:'movelist/movelist.html',
            controller:'movelistContr'
        })
    }]).controller('movelistContr',['$scope','$routeParams','$route','myserve',function ($scope,$routeParams,$route,myserve) {
        $scope.pages=($routeParams.page||'1')-0;
        $scope.pageSize=5;
        $scope.startPage=($scope.pages-1)*$scope.pageSize;
        console.log($routeParams);
        $scope.isload=true;
        myserve.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movelist,{start:$scope.startPage,count:$scope.pageSize,q:$routeParams.q}, function (data) {
            $scope.data=data;
            $scope.total=$scope.data.total;
            $scope.totalPage=Math.ceil($scope.data.total/$scope.pageSize);
            $scope.isload=false;
            $scope.$apply();
        })
        $scope.disables=false;
        $scope.disables2=false;
        $scope.changepage= function (nowpage) {
            if(nowpage<=0){
                $scope.disables=true;
                return
            }else{
                $scope.disables=false;
            }
            if(nowpage>$scope.totalPage){
                $scope.disables2=true;
                return;
            }else{
                $scope.disables2=false;
            }
            $route.updateParams({page:nowpage});
        }
    }])

})(angular)