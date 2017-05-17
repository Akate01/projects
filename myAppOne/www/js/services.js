angular.module('starter.services', [])

.factory('More', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
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
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 5,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 6,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 7,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 8,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



.factory("HomeGoodlists",function(){
  var homeGoodlistRows = [
    [{ "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_02.png"},
      {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_02.png"}],
    [{ "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_02.png"
    },
      { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_02.png"
      }]
  ];
  return{
    all:function(){
      return homeGoodlistRows;
    }
  };
})

.factory("HomeNewLists",function(){
	var homeNewListRows = [
	  [{ "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_03.png"},
	    {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_03.png"}],
	  [{ "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_03.png"},
	    { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_03.png"}]
	];
	return{
	  all:function(){
	    return homeNewListRows;
	  }
	};
  })

.factory("HomeLikeLists",function(){
	var homeLikeListRows = [
	  { "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_03.png"},
	    {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_03.png"},
	  { "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_03.png"},
	    { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_03.png"}
	];
	return{
	  all:function(){
	    return homeLikeListRows;
	  }
	};
  })