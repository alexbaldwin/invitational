var POINTS_FEED_URL = 'https://spreadsheets.google.com/' +
    'feeds/cells/0Aong3uq5I0qWdHlTZExDblc2cEZnZWl4OTdoMzFTUGc/' +
    'od6/public/basic?range=B15%3AC16&alt=rss';

function updateScores() {
  $.getFeed({
    url: POINTS_FEED_URL,
    success: function(feed) {
      console.log(feed);
      $('.player.one .score').text(feed.items[0].description);
      $('.player.two .score').text(feed.items[1].description);

      var p1pending = Number(feed.items[2].description);
      var p2pending = Number(feed.items[3].description);
      $('.player.one .pending').text('+' + p1pending);
      $('.player.two .pending').text('+' + p2pending);

      $('.player.one .pending').toggle(!!p1pending);
      $('.player.two .pending').toggle(!!p2pending);
    }
  });
}

$(function() {
  updateScores();
  setInterval(updateScores, 10000);
});
