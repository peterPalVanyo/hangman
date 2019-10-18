const Hangman = function(word, remaining) {
    this.word = word.toLowerCase().split('')
    this.remaining = remaining
    this.guessedLetters = []
}


Hangman.prototype.getPuzzle = function() {
    puzzle = ''
    this.word.forEach(letter => {
        letter === ' ' || this.guessedLetters.includes(letter) ? puzzle += letter : puzzle += '*'
    });
    return puzzle
}

Hangman.prototype.makeGuess = function(letter) {
    const isNew = !this.guessedLetters.includes(letter)
    const isNotScore = !this.word.includes(letter) 
    const isCharacter = typeof letter === 'string' && letter.length === 1
    if(isNew && isCharacter && isNotScore) {
        this.guessedLetters.push(letter)
        this.remaining--}
    if(isNew && isCharacter && !isNotScore) {
        this.guessedLetters.push(letter)
    }
    if(!isNew || !isCharacter) console.log('next time...')
}

const hangman = new Hangman('akarok barackot', 3)
console.log(hangman.getPuzzle())

window.addEventListener('keypress', function(e) {
    const letter = String.fromCharCode(e.charCode)
    hangman.makeGuess(letter)
    console.log(hangman.getPuzzle())
    console.log(hangman.remaining + " " + hangman.guessedLetters)
})


