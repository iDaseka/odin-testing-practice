//1
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//2
function reverseString(str) {
    return str.split('').reverse().join('');
}

//3
function calculator() {
    return {
        add: (n1, n2) => n1 + n2,
        subtract: (n1, n2) => n1 - n2,
        divide: (n1, n2) => n1 / n2,
        multiply: (n1, n2) => n1 * n2,
    };
}

//4
function caesarCipher(str, shiftFactor) {
    return shiftString(str, shiftFactor);
}

function shiftString(str, shiftFactor) {
    let shiftedStr = '';
  
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char.match(/[a-z]/i)) {
            const shiftedChar = shiftedChar(char, shiftFactor);
            shiftedStr += shiftedChar;
        }
        else{
            shiftedStr += char;
        }
    }
    return shiftedStr;
}

function shiftedChar(char, shiftFactor) {
    const charCode = char.charCodeAt();
    const isUpper = char === char.toUpperCase();
    const isLower = char === char.toLowerCase();
  
    if (isUpper || isLower) {
        const offset = isUpper ? 65 : 97;
        const shiftedCharCode = (charCode - offset + shiftFactor) % 26 + offset;
        return String.fromCharCode(shiftedCharCode);
    }
    return char;
}

//5
function analyzeArray(arr) {
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: arr.length,
    };
}

function average(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};