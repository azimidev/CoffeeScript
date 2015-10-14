var fillOut, info,
  slice = [].slice;

info = ['Amir', 'http://parsclick.net', 'http://badansazi.co.uk', 'http://hassanazimi.com'];

fillOut = function() {
  var i, item, len, links, name, results;
  name = arguments[0], links = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  $('#content').append(name + " <br />");
  results = [];
  for (i = 0, len = links.length; i < len; i++) {
    item = links[i];
    results.push($('#content').append(item + " <br />"));
  }
  return results;
};

fillOut.apply(null, info);
