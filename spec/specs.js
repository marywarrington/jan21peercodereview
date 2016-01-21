describe('wordPuzzler', function() {
  it('will replace the vowels with dashes', function() {
    expect(wordPuzzler('This is the word place')).to.equal('Th-s -s th- w-rd pl-c-');
  });
  it('will replace vowels in upper and lower case', function() {
    expect(wordPuzzler('ThIs is thE best sEntEnce plAce')).to.equal('Th-s -s th- b-st s-nt-nc- pl-c-');
  });
  it('will ignore blank strings', function() {
    expect(wordPuzzler('')).to.equal('');
  });
  it('will turn numbers into words, and convert the vowels to dashes', function() {
    expect(wordPuzzler('this has 4 items in it')).to.equal('th-s h-s f--r -t-ms -n -t');
  });
});

describe('numberToWord', function() {
  it('will turn single digit numbers into the word of the number', function() {
    expect(numberToWord(4)).to.equal('four');
  });

  it('will turn teen digit numbers into the word of the number', function() {
    expect(numberToWord(12)).to.equal('twelve');
  });
  it('will handle digits less than 100', function() {
    expect(numberToWord(25)).to.equal('twenty five');
  });
  it('will handle digits less than 1000', function() {
    expect(numberToWord(357)).to.equal('three hundred and fifty seven');
  });
  it('will ignore digits above 999', function() {
    expect(numberToWord(1000)).to.equal(1000);
  });
});
