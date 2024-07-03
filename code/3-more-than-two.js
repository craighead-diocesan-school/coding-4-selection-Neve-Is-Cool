// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  ans = Number (ans)

  while (ans !='Stop') {

    let ans = prompt ('Pick a random number')

    if (ans>2) {
      alert ('Did you know that ' + ans + ' is more than 2')
    } else {
      alert ('Did you know that ' + ans + ' is less than 2')
    }

  }

} 