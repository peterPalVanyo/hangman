const puzzleEl = document.querySelector('#puzzle')
const scoreEl = document.querySelector('#score')

const hangman = new Hangman('akarok barackot', 3)
puzzleEl.textContent = hangman.puzzle
scoreEl.textContent = hangman.statusMessage


window.addEventListener('keypress', function(e) {
    const letter = String.fromCharCode(e.charCode)
    hangman.makeGuess(letter)
    hangman.calculateStatus()
    puzzleEl.textContent = hangman.puzzle
    scoreEl.textContent = hangman.statusMessage
})

getWords(3).then((words) => {
    console.log(words)
}, (err) => {
    console.log(`error: ${err}`)
})




getCountry('HU').then((name) => {
    console.log(name)
}, (err) => {
    console.log(err)
})
