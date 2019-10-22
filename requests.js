
const getWords = (count) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch words')
        }
    }).then((data) => {
        return data.puzzle
    })
}

//the old way but the fetch built in the promise

/* const getWords = (count) => new Promise((resolve, reject) => {
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
}) */


const getCountry = (code) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('cannot fetch the data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === code)
    }).then((country) => country.name)
}



