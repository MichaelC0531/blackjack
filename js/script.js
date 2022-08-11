let deck = {
    h02: 2,
    h03: 3,
    h04: 4,
    h05: 5,
    h06: 6,
    h07: 7,
    h08: 8,
    h09: 9,
    h00: 10,
    hJ: 10,
    hQ: 10,
    hK: 10,
    hA: 11,
    s02: 2,
    s03: 3,
    s04: 4,
    s05: 5,
    s06: 6,
    s07: 7,
    s08: 8,
    s09: 9,
    s00: 10,
    sJ: 10,
    sQ: 10,
    sK: 10,
    sA: 11,
    d02: 2,
    d03: 3,
    d04: 4,
    d05: 5,
    d06: 6,
    d07: 7,
    d08: 8,
    d09: 9,
    d00: 10,
    dJ: 10,
    dQ: 10,
    dK: 10,
    dA: 11,
    c02: 2,
    c03: 3,
    c04: 4,
    c05: 5,
    c06: 6,
    c07: 7,
    c08: 8,
    c09: 9,
    c00: 10,
    cJ: 10,
    cQ: 10,
    cK: 10,
    cA: 11,
}
const card1 = document.getElementById('playercard1')
const card2 = document.getElementById('playercard2')
const card3 = document.getElementById('playercard3')
const hcard1 = document.getElementById('housecard1')
const hcard2 = document.getElementById('housecard2')
const bet100 = document.getElementById('100')
const hit = document.getElementById('hit')
const order = [card1, card2, hcard1, hcard2]
let playershand = 0
let househand = 0

let randomCardFromDeck = function () {
    const randomNum = Math.floor(Math.random() * Object.keys(deck).length)
    const randomKey = (Object.keys(deck)[randomNum])
    return randomKey
}

let gamestarts = function () {
    for (let card of order) {
        // const randomNum = Math.floor(Math.random() * Object.keys(deck).length)
        // const randomCard = (Object.keys(deck)[randomNum])
        let randomCard = randomCardFromDeck()
        if (card === hcard1) {
        card.className = 'card large back-red ' + randomCard;
        househand += deck[randomCard]
        }
            else if (card ===hcard2) {
                card.className = 'card large ' + randomCard;
                househand += deck[randomCard]
            }
            else { 
                card.className = 'card large ' + randomCard;
                playershand += deck[randomCard]
            }
        delete deck[randomCard]
    }
}
let hitme = function () {
    let randomCard = randomCardFromDeck()
    card3.className = 'card large ' + randomCard;
    playershand += deck[randomCard]
    delete deck[randomCard]
}
if (playershand === 21) {console.log('BLACKJACK!!!!!!!!!')}
    else {hit.addEventListener('click', hitme)}



bet100.addEventListener('click', gamestarts)

