var append, author;

append = function(i) {
  return $('#content').append(i);
};

author = 'Amir';

switch (author) {
  case 'Amir':
    append('Ruby');
    break;
  case 'Hassan':
    append('PHP');
    break;
  case 'Mike':
    append('JavaScript');
    break;
  default:
    append('Software Training');
}
