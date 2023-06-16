let word='aeaereaea';
let array=[];
let array2=[];
for(let i=0; i<=word.length/2-1; i++){
    array.push(word[i]);
}
console.log(array);
for(let i=word.length-1; i>=word.length/2; i--){
array2.push(word[i]);
}
console.log(array2);
 let str1=' ';
 let str2=' ';

 for(let i=0; i<array.length; i++){
    str1+=array[i];
 }
 for(let i=0; i<array2.length; i++){
str2+=array2[i];
 }
 console.log(str1);
 console.log(str2);
 if(str1==str2){
    console.log("word is true");
 }
 else{
    console.log("word is not");
 }