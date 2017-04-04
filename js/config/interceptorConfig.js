angular.module('sww').config(function($httpProvider){
    $httpProvider.interceptors.push('interceptorLoading');
    $httpProvider.interceptors.push('interceptorError');
});