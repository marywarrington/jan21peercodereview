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
});
