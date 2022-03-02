const sourceElement = document.getElementById('source');
const resultElement = document.getElementById('result');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');


function encrypt(input) {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter === 'e') {
            output = output + 'enter';
        } else if (letter === 'i') {
            output = output + 'imes'
        } else if (letter === 'a') {
            output = output + 'ai';
        } else if (letter === 'o') {
            output = output + 'ober';
        } else if (letter === 'u') {
            output = output + 'ufat';
        } else {
            output = output + letter
        }
    }

    return output;
};

const decrypt = (input) => {
    let output = '';
    // for (variable start value; how long to loop; how much to increase the variable each time)
    // input = 'enterenter', input.length -> 10 
    // i = 0, letter = 'e'
    // output = 'e'
    // i++, i += 1, i = i + 1
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter === 'e') {
            output = output + 'e'; // 'enter'
            i += 4; // i = i + 4
        } else if (letter === 'i') {
            output = output + 'i'; // 'imes'
            i += 3;
        } else if (letter === 'a') {
            output = output + 'a'; // 'ai'
            i += 1;
        } else if (letter === 'o') {
            output = output + 'o';
            i += 3;
        } else if (letter === 'u') {
            output = output + 'u';
            i += 3;
        } else {
            output = output + letter
        }
    }

    return output;
}

const encryptInput = () => {
    const input = sourceElement.value;
    resultElement.value = encrypt(input);
};

const decryptInput = () => {
    const input = sourceElement.value;
    resultElement.value = decrypt(input);
};

encryptButton.addEventListener('click', encryptInput)
decryptButton.addEventListener('click', decryptInput)