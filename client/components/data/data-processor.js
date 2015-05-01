'use strict';
angular.module('randomFlicksApp')
  .factory('DataProcessor', [ function() {
    var q = {};

    q.getMedia = function(data){
      data = data.data;
      data.items = _.filter(data.items,function(d){
        return !_.isUndefined(d.id.videoId);
      });
      return data;
    };

    q.getStatistics = function(videos,statistics){
      statistics = _.map(statistics,function(stat){
        _.each(stat.statistics,function(val,key){
          var num = parseFloat(val);
          stat.statistics[key] = _.isNaN(num) ? val : num;
        });
        return stat;
      });
      var stats = _.groupBy(statistics,"id");
      _.each(videos.items,function(d,i){
        if(!_.isUndefined(d.id.videoId)){
          videos.items[i].statistics = stats[d.id.videoId][0].statistics;
        }
      });
      return videos;
    };

    return q;
  }]);
