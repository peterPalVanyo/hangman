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

getWords((error, words) => {
    if(error) {
        console.log(error)
    } else {
        console.log(words)
    }
})

/* const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)    
    } else if(e.target.readyState === 4) {
        console.log('sorry there is some problem...') 
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send() */


/* const requestC = new XMLHttpRequest()
requestC.addEventListener('readystatechange', (e) => {
    const countries = JSON.parse(e.target.responseText)
    countries.forEach(element => {
        if(element.alpha2Code === 'HU') {
            console.log(element.name)
        }
    });
})
requestC.open('GET', 'https://restcountries.eu/rest/v2/all')
requestC.send() */
