eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2.W=b(7){7=2.R({y:o,L:o,K:Y,x:o,A:o,n:o,J:Y},7);g(7.y){g(2.V(7.A)&&2.m(7.n)===\'o\'){7.n=b(M,z,e){7.A(z,e)}}D g(2.m(7.A)===2.m(7.n)===\'o\'){7.n=b(M,z,e){1j.X&&X.1i(\'W 1h 1g 1f h\',M,z,e)}}1e $.1d({m:\'1c\',y:7.y,L:7.L,K:7.K,1b:(2.T.S)?"6":"4",x:b(4){f h=k I(4);g(2.V(7.x))7.x(h)},n:7.n,J:7.J})}};b I(4){g(4)3.U(4)};I.v={m:\'\',p:\'\',d:\'\',c:\'\',j:\'\',U:b(4){g(2.T.S){f H=k 1a("19.18");H.17(4);4=H}g(2(\'9\',4).E==1){3.m=\'C\';f w=k F(4)}D g(2(\'h\',4).E==1){3.m=\'16\';f w=k G(4)}g(w)2.R(3,w)}};b s(){};s.v={d:\'\',c:\'\',j:\'\',l:\'\',r:\'\'};b G(4){3.u(4)};G.v={u:b(4){f 9=2(\'h\',4).a(0);3.p=\'1.0\';3.d=2(9).5(\'d:i\').6();3.c=2(9).5(\'c:i\').t(\'Q\');3.j=2(9).5(\'15:i\').6();3.B=2(9).t(\'4:14\');3.l=2(9).5(\'l:i\').6();3.q=k P();f h=3;2(\'13\',4).O(b(){f 8=k s();8.d=2(3).5(\'d\').a(0).6();8.c=2(3).5(\'c\').a(0).t(\'Q\');8.j=2(3).5(\'12\').a(0).6();8.l=2(3).5(\'l\').a(0).6();8.r=2(3).5(\'r\').a(0).6();h.q.N(8)})}};b F(4){3.u(4)};F.v={u:b(4){g(2(\'C\',4).E==0)3.p=\'1.0\';D 3.p=2(\'C\',4).a(0).t(\'p\');f 9=2(\'9\',4).a(0);3.d=2(9).5(\'d:i\').6();3.c=2(9).5(\'c:i\').6();3.j=2(9).5(\'j:i\').6();3.B=2(9).5(\'B:i\').6();3.l=2(9).5(\'11:i\').6();3.q=k P();f h=3;2(\'8\',4).O(b(){f 8=k s();8.d=2(3).5(\'d\').a(0).6();8.c=2(3).5(\'c\').a(0).6();8.j=2(3).5(\'j\').a(0).6();8.l=2(3).5(\'10\').a(0).6();8.r=2(3).5(\'Z\').a(0).6();h.q.N(8)})}};',62,82,'||jQuery|this|xml|find|text|options|item|channel|eq|function|link|title||var|if|feed|first|description|new|updated|type|error|null|version|items|id|JFeedItem|attr|_parse|prototype|feedClass|success|url|msg|failure|language|rss|else|length|JRss|JAtom|xmlDoc|JFeed|global|cache|data|xhr|push|each|Array|href|extend|msie|browser|parse|isFunction|getFeed|console|true|guid|pubDate|lastBuildDate|content|entry|lang|subtitle|atom|loadXML|XMLDOM|Microsoft|ActiveXObject|dataType|GET|ajax|return|load|to|failed|log|window'.split('|')))
;
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
