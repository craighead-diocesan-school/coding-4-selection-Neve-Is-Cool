// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  
let budget = prompt ('How much money do you have to spend?')
budget = Number (budget)
let ogPrice = prompt ('How much is the item that you wish to purchase normally?')
ogPrice = Number (ogPrice)
let disPercent = prompt ('And what is the discount percentage?')
disPercent = Number (disPercent)

price = ogPrice / 100 * disPercent

ans = ogPrice - price

if (ans <= budget) {
alert ('The Item will cost $' + ans + ' which will mean you will have enough money to purchase the item with the discount of ' + disPercent + '%')
} else if (ans > budget) {
 alert ('You do not have enough money. You have $' + budget + ' to spend, but even with ' + disPercent + '% off, $' + ogPrice + ' only comes down to $' + ans )
} else {
  alert ('Error')
}
}

