document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log(this)
    //card options
    const cardArray = [
        {
            name: 'arbolito',
            img: 'static/img/arbolito.png'
        },
        {
            name: 'gato',
            img: 'static/img/gato.png'
        },
        {
            name: 'lapiz',
            img: 'static/img/lapiz.png'
        },
        {
            name: 'manzana',
            img: 'static/img/manzana.png'
        },
        {
            name: 'ponquecito',
            img: 'static/img/ponquecito.png'
        },
        {
            name: 'unicornio',
            img: 'static/img/unicornio.png'
        },
        // {
        //     name: 'barquilla',
        //     img: 'static/img/barquilla.png'
        // },
        // {
        //     name: 'pizza',
        //     img: 'static/img/pizza.png'
        // },
        {
            name: 'arbolito',
            img: 'static/img/arbolito.png'
        },
        {
            name: 'gato',
            img: 'static/img/gato.png'
        },
        {
            name: 'lapiz',
            img: 'static/img/lapiz.png'
        },
        {
            name: 'manzana',
            img: 'static/img/manzana.png'
        },
        {
            name: 'ponquecito',
            img: 'static/img/ponquecito.png'
        },
        {
            name: 'unicornio',
            img: 'static/img/unicornio.png'
        },
        // {
        //     name: 'barquilla',
        //     img: 'static/img/barquilla.png'
        // },
        // {
        //     name: 'pizza',
        //     img: 'static/img/pizza.png'
        // },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++ ) {
            var card = document.createElement('img')
            console.log(i)
            card.setAttribute('src', './static/img/board.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    // check for matches
    function checkForMatch() {
        console.log(this)
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ((cardsChosen[0] === cardsChosen[1]) && (cardsChosenId[0] != cardsChosenId[1])) {
            cards[optionOneId].setAttribute('src', './static/img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].setAttribute('src', './static/img/white.png')
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './static/img/board.png')
            cards[optionTwoId].setAttribute('src', './static/img/board.png')
        }
        //Restart Values
        cardsChosen = []
        cardsChosenId = []
        
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratularions! You found them all!'
        }
    }


    //flip you card
    function flipCard() {
        console.log(this)
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