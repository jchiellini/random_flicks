'use strict';

angular.module('randomFlicksApp')
  .controller('ShopCtrl', function ($scope, cache, DataDelegate) {
    $scope.cache = cache;

    $scope.Init = function(){
      DataDelegate.shopItem().success(function(d){
        console.log("Shop Items: ",d);
      }).error(function(){
         cache.toast("Unsuccessful","Failed to retrieve shop items.","error");
      });
    };

    $scope.cart_options = function(){
      return _.range(1, 10);
    };

    $scope.Prime = function(item, prop){
      if(_.isNaN(item[prop]) || item[prop] < 1){
        item[prop] = 1;
      }
      if(item[prop] > 30){
        item[prop] = 30;
      }
    };

    $scope.Add = function(item){
      var exists = _.find(cache.cart.items,{"_id":item._id});
      if(exists){
        if(exists.qty + 1 <= 30){
          exists.qty = exists.qty+1;
          if(exists.qty >= 10){
            item.expandQuantity = true;
          }
        }
      }else{
        console.log("ADD");
        cache.cart.items.push(item);
      }
    };

    $scope.store = [
      {
        _id:"1",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"2",
        name:"Bill Murray long sleeve",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"3",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"4",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"5",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"6",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      },
      {
        _id:"7",
        name:"Shirt 1",
        img:"assets/images/shop.jpeg",
        price: 13.99
      }
    ];

  });
