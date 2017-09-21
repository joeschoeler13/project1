var Input = prompt("Please enter your words, separated by ', ' to let the program alphabetize them.")
var ConsHi = 12
var ConsLo = 2

function GiveBack(array) {
  return array.split(", ").sort().length
}
var proof = GiveBack(Input)

if (proof <= ConsHi && proof >= ConsLo) {
  function alphabetize(words) {
    return words.split(", ").sort().join(", ")
  }
  alert("These are your alphabetized words: " + alphabetize(Input))
} else {
  alert("Sorry, the amount of words you inserted did not fit the constraint of 2 to 12 words. Try again!")
}
