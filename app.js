const puzzleEl = document.querySelector('#puzzle')
const scoreEl = document.querySelector('#score')

const hangman = new Hangman('akarok barackot', 3)
const score = `The number of lives: ${hangman.remaining}`
puzzleEl.textContent = hangman.getPuzzle()


window.addEventListener('keypress', function(e) {
    const letter = String.fromCharCode(e.charCode)
    hangman.makeGuess(letter)
    puzzleEl.textContent = hangman.getPuzzle()
    scoreEl.textContent = score
})