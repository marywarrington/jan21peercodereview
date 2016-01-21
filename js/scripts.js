var numberToWord = function(userSentence) {
  var singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  userSentence = userSentence.toString();
  for(var index = 0; index < singleDigit.length; index++) {
    while(userSentence.indexOf(index) >= 0) {
      userSentence = userSentence.replace(index+'', singleDigit[index]);
    }
  }
  return userSentence;
};

var wordPuzzler = function(userSentence) {
  return numberToWord(userSentence).replace(/[aeiouy]/gi, '-');
};
