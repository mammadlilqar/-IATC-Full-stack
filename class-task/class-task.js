
// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba
console.log("--------------");

console.log("Task No2");
let word="javascript is bomba";
let numberArr=[];
for(let i=0; i<word.length; i++){
    numberArr.push(word.charCodeAt(i));
}
console.log(numberArr);

console.log("--------------");



//3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
console.log("--------------");
console.log("Task No3");

let word3="hello world";
let arr= [];
for(let i=0; i<word3.length; i++){
arr.push(word3[i]);

}
console.log(arr);

console.log("--------------");


// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

console.log("--------------");
console.log("Task No4");
debugger

let vowels=['a', 'u', 'e', 'o', 'i' ];
let word4="hello world";
let newWord=[];
let array= [];
for(let i=0; i<word4.length; i++){
array.push(word4[i]);


}

console.log(array);

for(let i=0; i<array.length; i++) {
    for(let j=0; j<vowels.length; j++){
        if(array[i]!=vowels[j]){
             newWord.push(array[i]);
        }
    }

}

console.log("--------------");