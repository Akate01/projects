angular.module('starter.controllers', [])

.controller('DiscoCtrl', function($scope,$ionicSideMenuDelegate,HomeGoodlists,HomeNewLists,HomeLikeLists) {
	$scope.personList=function(){
		$ionicSideMenuDelegate.toggleLeft();
	};
	//好评榜
	$scope.HomeGoodListRows=HomeGoodlists.all();
	//最新课程
	$scope.HomeNewListRows=HomeNewLists.all();
	//猜你喜欢
	$scope.HomeLikeListRows=HomeLikeLists.all();
})

.controller('MoreCtrl', function($scope,More,$timeout,$ionicScrollDelegate) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = More.all();
  
  $scope.remove = function(chat) {
    More.remove(chat);
  };
  //点击按钮内容切换
  $scope.myList=true;
  
  $scope.toggle=function(){
  	$scope.myList=!$scope.myList;
  };
  //下拉刷新
  $scope.doRefresh=function(){
  	$scope.$broadcast('scroll.refreshComplete');
  };
  //上拉加载
  $scope.loadMore=function(){
  	$timeout(function(){
  		$scope.chats.push(
		  	{
		  		id: 0,
		    	name: 'Ben Sparrow',
		    	lastText: 'You on your way?',
		    	face: 'img/ben.png'
		  	}, {
		    	id: 1,
		    	name: 'Max Lynx',
			    lastText: 'Hey, it\'s me',
			    face: 'img/max.png'
			  }, {
			    id: 2,
			    name: 'Adam Bradleyson',
			    lastText: 'I should buy a boat',
			    face: 'img/adam.jpg'
			  });
		$scope.$broadcast('scroll.infiniteScrollComplete');
  	},1000);
  };
  
//滚动
	$scope.scrollTop=function(){
		$ionicScrollDelegate.scrollTop(true)
	}
  
})


//社区
.controller('homeCtrl', function($scope) {})

.controller('PersonCtrl', function($scope) {})

.controller("slideCtrl",function($scope){
	$scope.myActiveSlide=1;
	$scope.pics=[{
		"id":0,
		"picSrc":"透明图04.jpg",
	},{
		"id":1,
		"picSrc":"透明图07.jpg",
	},{
		"id":2,
		"picSrc":"透明图01.jpg",
	},{
		"id":3,
		"picSrc":"透明图10.jpg",
	},{
		"id":4,
		"picSrc":"透明图09.jpg",
	},{
		"id":5,
		"picSrc":"透明图02.jpg",
	}];
})

.controller('ZhuceCtrl', function($scope,) {});