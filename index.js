
let cards = []
let sum = 0
let hasBlackJack = false
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

//revise this 
function getRandomCard(){
    

    let randomNumber = Math.floor(Math.random()*13)+1 
    if (randomNumber > 10 ){
        return 10
    }else if (randomNumber === 1 ){
        return 11
    }else{
        return randomNumber
    }
    
}


function startGame(){
    hasBlackJack = true
    let firstCard =getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
     sum = firstCard + secondCard

    renderGame()
}


function renderGame(){
    const cardImg = document.getElementById("img-card")
    cardsEl.textContent = "Cards: "
    cardImg.innerHTML=""
    for (let i =0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] +" "
        cardImg.innerHTML+= `<img src="./image/heart_${cards[i] === 11 ? 1 : cards[i]}.png" />`
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message="Do you want to draw a new card ? "
    
    }else if (sum === 21){
        message=" You've got Blackjack! "
        hasBlackJack = true
    }else {
        message="You're out of the game! "
    }
    messageEl.textContent = message
}
function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}