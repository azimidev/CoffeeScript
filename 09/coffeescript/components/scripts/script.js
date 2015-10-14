var addStuff, name1, name2;

name1 = "Amir";

name2 = "Mahdi";

(addStuff = function() {
  return $('#content').append("<strong>" + name1 + "</strong>");
})();
