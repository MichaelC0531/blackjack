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
const card4 = document.getElementById('playercard4')
const card5 = document.getElementById('playercard5')
const card6 = document.getElementById('playercard6')
const card7 = document.getElementById('playercard7')
const card8 = document.getElementById('playercard8')
const card9 = document.getElementById('playercard9')
const card10 = document.getElementById('playercard10')
const card11 = document.getElementById('playercard11')

const hcard1 = document.getElementById('housecard1')
const hcard2 = document.getElementById('housecard2')
const hcard3 = document.getElementById('housecard3')
const hcard4 = document.getElementById('housecard4')
const hcard5 = document.getElementById('housecard5')
const hcard6 = document.getElementById('housecard6')

const bet100 = document.getElementById('100')
const hit = document.getElementById('hit')
const stand = document.getElementById('stand')
const result = document.getElementById('result')

const first4Order = [card1, card2, hcard1, hcard2]
const playerOrder = [card3, card4, card5, card6, card7, card8, card9, card10, card11]
const houseOrder = [hcard3, hcard4, hcard5, hcard6]

let playershand = 0
let househand = 0

let randomCardFromDeck = function () {
    const randomNum = Math.floor(Math.random() * Object.keys(deck).length)
    const randomKey = (Object.keys(deck)[randomNum])
    return randomKey
}

let gamestarts = function () {
    for (let card of first4Order) {
        let randomCard = randomCardFromDeck()
        if (card === hcard1) {
        card.className = 'card large house back-red ' + randomCard;
        househand += deck[randomCard]
        card.style.opacity = 1
        }
            else if (card === hcard2) {
                card.className = 'card large house ' + randomCard;
                househand += deck[randomCard]
                card.style.opacity = 1
            }
            else { 
                card.className = 'card large player ' + randomCard;
                playershand += deck[randomCard]
                card.style.opacity = 1
            }
        delete deck[randomCard]
    }
}
const hitme = function(card) {
    let randomCard = randomCardFromDeck()
    card.className = 'card large player ' + randomCard;
    playershand += deck[randomCard]
    card.style.opacity = 1
    delete deck[randomCard]
}
const hithouse = function(card) {
    let randomCard = randomCardFromDeck()
    card.className = 'card large house ' + randomCard;
    househand += deck[randomCard]
    card.style.opacity = 1
    delete deck[randomCard]
}


if (playershand === 21) {
    console.log('BLACKJACK!!!!!!!!!')
} else {
    let i = 0
    hit.addEventListener('click', function() {
        if (playershand === 21) {
            result.innerText = 'BLACKJACK21';
        } else if (playershand < 21) {
            hitme(playerOrder[i])
            i++;
            if (playershand > 21) {
            result.innerText = 'You Lost';
            }
        }
    })
}
const nomore = function () {
    hit.disabled = true
    hcard1.classList.remove('back-red')
    while (househand < 16) {
        let i = 0;
        hithouse(houseOrder[i]) 
    } 
    if (househand > playershand) {
        result.innerText = 'You Lost'
    } else if (househand < playershand) {
        result.innerText = 'You WON!!';
    } else { result.innerText = '-TIE-';
    }
}
stand.addEventListener('click', nomore)  
bet100.addEventListener('click', gamestarts)



