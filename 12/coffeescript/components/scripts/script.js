var i, info, j, k, key, l, len, len1, len2, names, thing, value;

names = ['Amir', 'Shadi', 'Mahdi', 'Sara', 'Mina'];

for (j = 0, len = names.length; j < len; j++) {
  thing = names[j];
  console.log(thing);
}

for (i = k = 0, len1 = names.length; k < len1; i = ++k) {
  thing = names[i];
  console.log(i + " " + thing);
}

for (i = l = 0, len2 = names.length; l < len2; i = ++l) {
  thing = names[i];
  if (thing !== "Amir") {
    console.log(thing + " " + i);
  }
}

info = {
  name: 'Amir',
  title: 'Software Engineer',
  tuts: 'http://hassanazimi.com'
};

for (key in info) {
  value = info[key];
  console.log(key + " " + value);
}
