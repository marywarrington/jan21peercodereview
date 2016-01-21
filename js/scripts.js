var numberToWord = function(number) {
  var singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teenDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var output = '';
  if(number > 10) {
    if(number < 20) {// teens
      output = teenDigits[number-10];
    }
    // break it up

  } else { // single digit
    output = singleDigit[number];
  }
  return output;
}

var wordPuzzler = function(userSentence) {
  return userSentence.replace(/[aeiouy]/gi, '-');
};
