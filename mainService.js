angular.module('userProfiles').service('mainService', function() {
  
  var data = 
  [
    {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "http://vignette2.wikia.nocookie.net/arresteddevelopment/images/a/a7/S4_George_%2802%29.jpg/revision/latest?cb=20130502032534"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "http://vignette2.wikia.nocookie.net/arresteddevelopment/images/5/5c/1x01_Pilot_%2823%29.png/revision/latest?cb=20120301045528"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "http://vignette2.wikia.nocookie.net/arresteddevelopment/images/6/61/1x20_Whistler%27s_Mother_%2861%29.png/revision/latest?cb=20120908172131"  
    },
    {
        "id": 3,
        "first_name": "GOB",
        "last_name": "bluth",
        "avatar": "http://vignette1.wikia.nocookie.net/arresteddevelopment/images/7/7d/S4_GOB_%2801%29.jpg/revision/latest?cb=20130502032535"
    },
    ]
    this.getUsers = function () {
          return data
    }
    this.toggleFavorite = function(id) {
        data[id].isFavorite = !data[id].isFavorite;
    }
});