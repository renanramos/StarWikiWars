angular.module('sww').factory('paginaAPIService', function(){
    
    var _isNext = function(obj){
        return !!obj.data.next;
    };  
    
    var _isPrevious = function(obj){
        return !!obj.data.previous;
    };

    var _getNextPage = function(obj){
        var nextPage = obj.data.next;
        if(nextPage !== null){
            return nextPage.substring(nextPage.length - 1, nextPage.length);
        }else{
            return 1;
        }
    };
    
    var _getPreviousPage = function(obj){
        var previousPage = obj.data.previous;
        if(previousPage !== null){
            return previousPage.substring(previousPage.length - 1, previousPage.length);
        }else{
            return 1;
        }
    };

    return{
        isNext : _isNext,
        isPrevious : _isPrevious,
        getNextPage : _getNextPage,
        getPreviousPage : _getPreviousPage
    }
});