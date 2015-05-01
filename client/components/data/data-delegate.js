'use strict';
angular.module('randomFlicksApp')
  .factory('DataDelegate', ['DataProcessor', 'DataQuery',
    function(DataProcessor, DataQuery) {
      var q = {};

      q.getMedia = function(index) {
        return DataQuery.getMedia(index)
          .then(function(videos) {
            videos = DataProcessor.getMedia(videos);
            var ids = _.map(videos.items,function(video){
              return video.id.videoId;
            });

            return DataQuery.getStatistics(ids).then(function(statistics){
              return DataProcessor.getStatistics(videos,statistics.data.items);
            });

          });
      };

      q.getStatistics = function(index) {
        return DataQuery.getStatistics(index)
          .then(function(d) {
            return DataProcessor.getStatistics(d);
          });
      };

      q.sendEmail = function(data){
        return DataQuery.sendEmail(data)
          .success(function(response){ return response; })
          .error(function(response){ return response; });
      };

      q.images = function(id,method,data){
        return DataQuery.images(id,method,data);
      };

      q.shopItem = function(id,method,data){
        return DataQuery.shopItem(id,method,data);
      };

      q.tags = function(id,method,data){
        return DataQuery.tags(id,method,data);
      };

      return q;
    }
  ]);
