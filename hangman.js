const Hangman = function(word, remaining) {
    this.word = word.toLowerCase().split('')
    this.remaining = remaining
    this.guessedLetters = []
    this.status = 'playing'
}


Hangman.prototype.getPuzzle = function() {
    puzzle = ''
    this.word.forEach(letter => {
        letter === ' ' || this.guessedLetters.includes(letter) ? puzzle += letter : puzzle += '*'
    });
    return puzzle
}

Hangman.prototype.makeGuess = function(letter) {
    if(this.status !== 'playing') return
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

Hangman.prototype.calculateStatus = function() {
    if(this.remaining < 0 && this.getPuzzle().includes('*')) this.status = 'failed'
    if(this.remaining >= 0 && !this.getPuzzle().includes('*')) this.status = 'finished'
}

Hangman.prototype.displayStatus = function() {
    if(this.status === 'failed') {return `Next time Gadget, the word was: ${this.word.join('')}`}
    else if(this.status === 'finished') {return "Rise and shine, you have solved the puzzle!"}
    else {return `The number of lives: ${this.remaining}`}
}


