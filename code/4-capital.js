// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt ('Hello! What is your name?')

  let theirAnswer = prompt ('Quick question, ' + name + '. What is the capital of France?')

  if (theirAnswer == 'Paris') {
    alert ("That's right, " + name + '.')
  } else if (theirAnswer=='paris') {
    alert ("That's right, " + name + '.')
  } else {
    alert ('You are wrong, try again')
  }



}
