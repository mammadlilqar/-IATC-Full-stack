const asciicode=  [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
let word='';
for (let i=0; i<words.length; i++) {

let letter =String.fromCharCode(asciicode[i]);
word += letter;
}
console.log (word);
