var Input = prompt("Please enter your words, separated by ', ' to let the program alphabetize them.")
function alphabetize(words) {
    return words.split(", ").sort()			//".split() && ".sort()"-method WORKING
                                            //Last to do: get substrings together as ONE string
}
alert("These are your alphabetized words:" + alphabetize(Input))