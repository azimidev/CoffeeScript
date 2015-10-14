var a, b, c, d, e, f, ref;

a = [1, 2, 3];

b = [4, 5, 6, 7];

c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

e = ['Amir', 'Mahdi', 'Shadi', 'Sara', 'Lena'].slice(0, 3);

f = ['Amir', 'Mahdi', 'Shadi', 'Sara', 'Lena'].slice(2);

[].splice.apply(f, [1, 2].concat(ref = ['Bob', 'Pete'])), ref;
