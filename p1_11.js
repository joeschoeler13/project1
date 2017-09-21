var Input = prompt("Please enter your words, separated by ', ' to let the program alphabetize them.")
function alphabetize(words) {
	return words.split(", ").sort().join(", ")
}
alert("These are your alphabetized words: " + alphabetize(Input))