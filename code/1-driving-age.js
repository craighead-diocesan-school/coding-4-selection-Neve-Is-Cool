// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt ('How old are you?')


  const legalAge = 16
  if (age > legalAge) {
    alert("You're old enough to drive.")
  } else {
    alert ("You're not old enough to drive yet.")
  }
}
