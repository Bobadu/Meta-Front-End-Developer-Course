function letterFinder(word, match) {
    let condition1 = typeof word === 'string' && word.length >= 2;
    let condition2 = typeof match === 'string' && match.length === 1;

    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(5, 5);
letterFinder("cat", "c");