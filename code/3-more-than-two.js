// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {

  let ans = 0

  while (ans!= 'Stop') {
  ans = prompt ('Pick a random number')
  }

  const comparisonToTwo = 2

  if (ans >comparisonToTwo) {
    alert ('Did you know that ' + ans + ' is greater than 2.' )
  } else if (ans<comparisonToTwo) {
    alert ('Did you know that ' + ans + ' is less than 2.')
  } else if (ans == comparisonToTwo) {
    alert ('Did you know that ' + ans + ' is equal to 2.')
  } else if (ans == 'Stop') {
    alert ('Alright, all you had to do was ask.')
  } else {
    alert ('I do not understand you')
  }

}