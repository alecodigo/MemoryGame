document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //card options
    const cardArray = [
        {
            name: 'avestruz',
            img: 'static/img/avestruz.png'
        },
        {
            name: 'guacamaya',
            img: 'static/img/guacamaya.png'
        },
        {
            name: 'Pavo Real',
            img: 'static/img/pavo_real.png'
        },
        {
            name: 'tucan',
            img: 'static/img/tucan.png'
        },
        {
            name: 'turpial',
            img: 'static/img/turpial.png'
        },
        {
            name: 'avestruz',
            img: 'static/img/avestruz.png'
        },
        {
            name: 'guacamaya',
            img: 'static/img/guacamaya.png'
        },
        {
            name: 'Pavo Real',
            img: 'static/img/pavo_real.png'
        },
        {
            name: 'tucan',
            img: 'static/img/tucan.png'
        },
        {
            name: 'turpial',
            img: 'static/img/turpial.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //crete your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++ ) {
            var card = document.createElement('img')
            card.setAttribute('src', './static/img/board.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './static/img/white.png')
            cards[optionTwoId].setAttribute('src', './static/img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './static/img/board.png')
            cards[optionOneId].setAttribute('src', './static/img/board.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratularions! You found them all!'
        }
    }


    //flip you card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }



    createBoard()
  });