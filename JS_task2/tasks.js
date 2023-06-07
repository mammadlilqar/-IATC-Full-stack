//1.Write program that will reverse string: 'Hello world' => 'dlrow olleH'

let a="Hello world";
let b=[];
let c=[];
let d=' '
 for(let i=0; i<a.length; i++){
    b.push(a[i]);
}

console.log(b);

for(let i=b.length-1; i>=0; i--){
c.push(b[i]);
}
console.log(c);
for(let i=0; i<c.length;i++){
  d+=c[i];
}
console.log(d);

//2.Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'

let e='Hello world';
let g=[]
let s='';
 
for(let i=0; i<g.length; i++){
    s+=g[i];
}
console.log(s);

//3.Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'


let f='Hello world';
let n=3;
let  w='';

for (let i=0; i<=n; i++){
    w+=f;
}

console.log(w);

 

//6.Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}
let characters='abacddbec';
let strToArr = [];
for(let i=0; i<characters.length; i++) {
    strToArr.push(characters[i]);
}
let empty={};
for(let i=0; i<strToArr.length;i++) {
    let num3=strToArr[i];
if(empty[num3]){
      empty[num3]++;
}
else{
   empty[num3]=1;
}

}
console.log(empty);


//7.Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'
let word='Hello world';
let wordParts=[];
let p=5;
let newWord='';
for(let i=0;i<word.length;i++){
wordParts.push(word[i]);
}
for(let i=0;i<p;i++){
newWord+=wordParts[i];
}

console.log(newWord+'...');


//9.Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15
let arr= [1, 2, 3, 4, 5];
let sum=0;
for(let i=0; i<arr.length; i++){
sum+=arr[i];
}
console.log(sum);

//10.Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3
let avg=0;
for(let i=0; i<arr.length; i++){
avg=sum/arr.length;
}
console.log(avg);

//11.Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5,22,] => 5
let myArray=[1, 2, 3, 4, 5];
let myMax=myArray[0];

for (let i=1; i<myArray.length; i++){
    if(myMax<myArray[i]){
   myMax=myArray[i];
    }
}
console.log(myMax);


//12.Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1
let myArray2=[1, 2, 3, 4, 5];
let myMin=myArray2[0];

for (let i=1; i<myArray2.length; i++){
    if(myMin>myArray2[i]){
   myMin=myArray2[i];
    }
}
console.log(myMin);



//13.Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] 
let secondMax =0;
let myArray3=[1,2,3,4,5,2,44,4,43];
let num=myArray3.length;
myArray3 = myArray3.sort((a,b) =>a-b);

secondMax = myArray3[num-2]

console.log(secondMax);



//14.Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2

let secondMin =0;
let myArray4=[1,2,3,4,5,2,44,4,43];
myArray4 = myArray4.sort((a,b) =>a-b);

secondMin = myArray4[1]

console.log(secondMin);


//15.Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}


    var numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    var counts = {};
    for (var i = 0; i < numbers.length; i++) {
        var num2 = numbers[i];
        if (counts[num2]) {
            counts[num2]++;
        } else {
            counts[num2] = 1;
        }
    }
    

     console.log(counts);



//16.Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

myArray=[1, 2, 3, 4, 5];
let oddSum=0;

for(let i=0; i<myArray.length; i++){
    if(myArray[i]%2 != 0){
    oddSum+=myArray[i];
}
}

console.log(oddSum);


//17.Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6


myArray=[1, 2, 3, 4, 5];
evenSum=0;

for(let i=0; i<myArray.length; i++){
    if(myArray[i]%2 == 0){
    evenSum+=myArray[i];
}
}

console.log(evenSum);





