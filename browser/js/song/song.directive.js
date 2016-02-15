juke.directive('songList', function(PlayerFactory) {
    return {
        restrict: 'E',
        templateUrl: '/js/song/templates/songlist.html',
        scope: {
            songs: '='
        },
        link: function(scope) {
            // scope.songs = songs;

            scope.toggle = function(song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, scope.songs);
                } else if (PlayerFactory.isPlaying()) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };
            scope.start = function(song) {
              PlayerFactory.start(song, scope.songs);
            }

            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function(song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };
        }
    };
});
juke.directive('doubleClick', function(PlayerFactory) {
      return {
        restrict: 'A',
        // templateUrl: '/js/song/templates/songlist.html',
        scope: {
            doubleClick: '&'
        },
        link: function(scope, element) {
          element.on('dblclick', function() {
            console.log("double clicked");
              scope.doubleClick();
          });
        }
      };
});
