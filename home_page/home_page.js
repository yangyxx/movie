/**
 * Created by Administrator on 2017/10/31.
 */
(function (angular) {
    var h=angular.module('home_page',['ngRoute']);
    h.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home_page',{
            templateUrl:'home_page/home_page.html',
            controller:'home_pagecontr'
        }).otherwise({
            redirectTo:'/home_page'
        })
    }])
    h.controller('home_pagecontr',[function () {
        
    }])
})(angular)