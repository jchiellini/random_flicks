'use strict';
angular.module('randomFlicksApp')
  .factory('DataQuery', ['$http',
    function($http) {
      var q = {};

      var Query = function(url,data,method){
        method = method ? method : "GET";
        var obj = {
          url:url,
          method:method,
          cache: false
        };
        if(data){
          obj.data = data;
        }
        return $http(obj);
      };

     //Server Key: AIzaSyAfLpmoADfXX1h1LWsIqnuuNMYwylIPmS8
     //Browser Key: AIzaSyCn0AUiMlfzOpevBAiSbOpwERNb6Nk7gd4
     q.getMedia = function(index){
       var params = {
         key: 'AIzaSyAfLpmoADfXX1h1LWsIqnuuNMYwylIPmS8',
         part: 'snippet,id',
         channelId:'UCYFVg8As3QMjsMOSN0-0wsA',
         order:'date',
         maxResults:50
       };

       if(index){
         params.pageToken = index;
       }

       return $http({
         url:'https://www.googleapis.com/youtube/v3/search',
         method: "GET",
         cache: true,
         params:params
       });

      };

      q.getStatistics = function(ids){
        var params = {
          key: 'AIzaSyAfLpmoADfXX1h1LWsIqnuuNMYwylIPmS8',
          part: 'statistics',
          id:ids.toString()
        };

        return $http({
          url:'https://www.googleapis.com/youtube/v3/videos',
          method: "GET",
          cache: true,
          params:params
        });
      };

      q.sendEmail = function(data){
        return $http.post('/api/emails',data);
      };

      q.images = function(id,method,data){
        id = id ? "/"+id : '';
        var url = "/api/images"+id;
        return new Query(url,method,data);
      };

      q.shopItem = function(id,method,data){
        id = id ? "/"+id : '';
        var url = "/api/shops"+id;
        return new Query(url,method,data);
      };

      q.tags = function(id,method,data){
        id = id ? "/"+id : '';
        var url = "/api/tags"+id;
        return new Query(url,method,data);
      };

      return q;
    }]);
