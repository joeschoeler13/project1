var Input = prompt("Please enter your words, separated by ', ' to let the program alphabetize them.")
function alphabetize(words) {
    return words.split().sort()			//".split() && ".sort()"-method tested in V6-1
    													//???put substrings into array?
    													//???how to do the output?
}
alert("These are your alphabetized words:" + alphabetize(Input))