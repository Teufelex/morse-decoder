const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '**********') {
            res.push(' ');
        } else {
            let arr2 = arr[i].match(/.{1,2}/g);
            for (let j = 0; j < arr.length; j++) {
            if (arr2[j] == '00') {
                arr2.splice(j, 1);
                j--;
            }
            if (arr2[j] == '10') arr2.splice(j, 1, '.');
            if (arr2[j] == '11') arr2.splice(j, 1, '-');
           }
           let a = arr2.join('');
           res.push(a);
        }
    }
    let sum = '';
    for (let i = 0; i < res.length; i++) {
        if (res[i] in MORSE_TABLE) {
            sum += MORSE_TABLE[res[i]];
        } else {
            sum += ' ';
        }
    }
    return sum;
}

module.exports = {
    decode
}