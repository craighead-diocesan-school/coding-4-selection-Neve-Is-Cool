// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my sports discussion program')

  let answer = prompt('Do you like running? Answer yes or no.')

  if (answer == 'yes') {
    let ans2 = prompt ("That's good - do you do athletics?")

    if (ans2 == 'yes') {
      alert ('Good luck in your next race!')
    } else {
      alert ('Just for fun then.')
    }
  } 

  else {
    let olympic = prompt ('Do you watch Olympic Athletics?')

    if (olympic == 'yes') {
      alert ("That's good - It's inspiring.")
    } else {
      alert ("It's not for everyone.")
    }
  }

  alert('Goodbye')
}

function age() {
  let ages = prompt ('How old are you?')
  ages = Number (ages)
 
  if (ages>130) {
      alert ('Your age is invalid. Try again.')
    }else if (ages<1) {
      alert ('Your age is invalid. Try again.')
    }else if (ages>65) {
      alert ("You are old enough to retire.")
    }else if (ages<5) {
      alert ('You still need supervision when using a computer')
    }else if (ages >= 18) {
      alert ('You are old enough to vote. Yippee')
    }else if (ages != 15) {
      alert ('You are not the same age as me.')
    }else if (ages == 15) {
      alert ('You are the same age as me!')
  }

}