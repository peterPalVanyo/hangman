const Hangman = function(word, remaining) {
    this.word = word.toLowerCase().split('')
    this.remaining = remaining
    this.guessedLetters = ['h']
}


Hangman.prototype.getPuzzle = function() {
    puzzle = ''
    this.word.forEach(letter => {
        letter === ' ' ? puzzle += ' ' : puzzle += '*'
    });
    return puzzle
}

const hangman = new Hangman('akarok barackot', 3)

console.log(hangman.word)
console.log(hangman.getPuzzle())
