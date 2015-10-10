function changeNum(sentence) {
    var numbersWord = "zero one two three four five six seven eight nine"
    var numbers = '0123456789'

    //converts all my strings to arrays
    numbers = numbers.split('');
    numbersWord = numbersWord.split(" ");
    sentence = sentence.split(" ");


    console.log(numbersWord);
    console.log(numbers);
    console.log(sentence);

    for (var i = 0; i < sentence.length; i++) {// iterates through the sentence
        for (var j = 0; j < numbersWord.length; j++) { // iterate through numbersWord array
            if(sentence[i].toLowerCase() === numbersWord[j]) {// if the ith word equals any wors in the numbersWord array
                sentence[i] = numbers[j]; // then change that word in sentence to the corresponding number from the numbers array
            }
        }
    }


    console.log(sentence.join(' ')); //converts the array back into a string
}
changeNum("ONE zero 8 three elephant twojoeys")