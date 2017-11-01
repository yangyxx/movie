(function (angular) {
    // "use strict";
    var a=angular.module('myapp',['details','home_page','movelist']);
    a.controller('mycontr',['$scope','$location', function ($scope,$location) {
        $scope.u=$location;
        $scope.f=$scope.u.url().substr(1);
        $scope.$watch('u.url()', function (n) {
            if(n.startsWith('/home_page')){
                $scope.f='home_page';
            }else if(n.startsWith('/in_theaters')){
                $scope.f='in_theaters';
            }else if(n.startsWith('/coming_soon')){
                $scope.f='coming_soon';
            }else if(n.startsWith('/top250')){
                $scope.f='top250';
            }
        })
    }])
})(angular);