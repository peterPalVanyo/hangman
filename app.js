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

getWords(3).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


getCountry('HU').then((country) => {
    console.log(country)
}).catch((err) => {
    console.log(err)
})

