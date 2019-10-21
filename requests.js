const getWords = (count) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if(e.target.readyState === 4) {
            reject('sorry there is some problem')
            }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${count}`)
    request.send()
})

const getCountry = (code) => new Promise((resolve, reject) => {
    const requestC = new XMLHttpRequest()
    requestC.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText)
            const c = countries.find((e) => {return e.alpha2Code === code})
            resolve(c.name)
        } else if(e.target.readyState === 4) {
            reject('country problem')
        }
    })
        requestC.open('GET', 'https://restcountries.eu/rest/v2/all')
        requestC.send()
})

