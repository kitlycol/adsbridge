var adserve = "https://us-west.appnexus-pixel.net";
function track(evt){
  var cts = adserve + "/ct/?u=" + window._clk;
  var trk = location.search.split('trk=').slice(-1)[0].split('&')[0];
  var href = cts + "&e=" + evt + "&l=" + encodeURIComponent(trk);
  var node = document.createElement("script");node.setAttribute("src", href);
  document.head.appendChild(node);
};
var impress = adserve + "/px/" + location.search;
var pixel = '<script src="'+impress+'"><'+'/'+'script>';
var banner = '<a href="http://www.jules.com/fr/l/soldes" target="_blank">';
banner += '<img src="https://cdn.adnxs.com/p/7e/5a/bc/c3/7e5abcc34ef6246100780c57b11b8ce8.gif" onload="track(1)" border="0"/></a>';
document.write(pixel+banner);