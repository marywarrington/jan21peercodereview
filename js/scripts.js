var numberToWord = function(number) {
  var singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return singleDigit[number];
}

var wordPuzzler = function(userSentence) {
  return userSentence.replace(/[aeiouy]/gi, '-');
};
