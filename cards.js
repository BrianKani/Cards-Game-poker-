
let sum = 0 
let hasBlackJack = false 
let isAlive=false
let message = ""
let cards = []

let player= {
    name: "Brian",
    cash: 200
}




let messageEl = document.getElementById("messagel")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-el") 

let playerElement = document.getElementById("playerel")
playerElement.textContent = player.name + ": $" +player.cash

function startgame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    rendergame()
}
function rendergame(){

if (sum <= 20){
    message = "Pick another card" 
    isAlive = true
    
}
else if (sum===21) {
    message = "Congrats! black jack"
    hasBlackJack=true
    
}
else {
    message = "You are out"
    isAlive=false
    
}
messageEl.textContent = message
sumEl.textContent = "Sum:"+" "+sum    
cardEl.textContent = "Cards: " 

for(let i=0; i < cards.length; i++ ){
    cardEl.textContent += cards[i] +" "
}


}
function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    rendergame()
    }
}
    
    


function getRandomCard(){
    let randomCard = Math.floor ( Math.random() * 13) +1

if (randomCard === 1 ){
    return 11
}
else if(randomCard > 10  ){
    return 10
}
else{
    return randomCard
}
}
for(let i = 0; i<100; i++){
console.log("Lionel Messi")}
