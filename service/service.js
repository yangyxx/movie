/**
 * Created by Administrator on 2017/10/31.
 */
(function (angular) {
    angular.module('myservice',[]).service('myserve',['$window',function ($window) {
        this.jsonp= function (url,arg,fn) {
            var s=$window.document.createElement('script');
            var str='';
            for(var k in arg){
                str+=k+'='+arg[k]+'&';
            }
            var fname="m"+$window.Math.random().toString().substr(2);
            url+='?'+str+'callback='+fname;
            $window[fname]= function (data) {
                fn(data);
            }
            s.src=url;
            $window.document.body.appendChild(s);
        }
    }])
})(angular)