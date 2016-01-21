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
  userSentence = numberToWord(userSentence); // change numbers to words
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y' ];
  for (var index = 0; index < vowels.length; index++) {// loop through vowels array
    while(userSentence.indexOf(vowels[index]) >= 0) { // check sentence for current vowel
      userSentence = userSentence.replace(vowels[index], '-'); // replace the vowel with a dash
    }
  }
  return userSentence;
};
