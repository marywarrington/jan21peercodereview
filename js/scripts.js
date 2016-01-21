var numberToWord = function(number) {
  var singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // for(var index = 0; index < 10; index++)
  //   string.replace(new RegExp('/'+singleDigit[index]+'/g'), singleDigit[index]);
  var teenDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty' ,'seventy', 'eighty', 'ninety'];
  var hundredText = ' hundred and ';
  var output = '';

  if (number > 999) {
    output = number;
  } else {
    if(number > 10) {
      if(number < 20) {// teens
        output = teenDigits[number-10];
      } else { // twenty plus
        var numArray = number.toString().split('');
        if(number > 99) { //hundred!
          var hundredthPlace = numArray.shift();
          output += singleDigit[hundredthPlace] + hundredText;
        }
        output += tens[parseInt(numArray[0])-2] + ' ' + singleDigit[parseInt(numArray[1])];
      }
      // break it up

    } else { // single digit
      output = singleDigit[number];
    }
  }
  return output;
};

var wordPuzzler = function(userSentence) {
  var singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for(var index = 0; index < singleDigit.length; index++) {
    while(userSentence.indexOf(index) > 0) {
      userSentence = userSentence.replace(index+'', singleDigit[index]);
    }
  }

  return userSentence.replace(/[aeiouy]/gi, '-');
};
