var POINTS_FEED_URL = 'https://spreadsheets.google.com/' +
    'feeds/cells/0Aong3uq5I0qWdHlTZExDblc2cEZnZWl4OTdoMzFTUGc/' +
    'od6/public/basic?range=B15%3AC15&alt=rss';

$(function() {
  $.getFeed({
    url: POINTS_FEED_URL,
    success: function(feed) {
      $('.player.one .score').text(feed.items[0].description);
      $('.player.two .score').text(feed.items[1].description);
    }
  });
});