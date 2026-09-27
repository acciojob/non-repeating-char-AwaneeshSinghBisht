function firstNonRepeatedChar(str) {

    let count = {};

    // Step 1: Count each character
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (count[ch]) {
            count[ch]++;
        } else {
            count[ch] = 1;
        }
    }

    // Step 2: Find first character with count 1
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));