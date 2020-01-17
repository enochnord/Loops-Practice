// print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
var num = -10
while(num <= 19) {
    console.log(num);
    num++;
}

// print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
var num = 10
while(num <= 40) {
    console.log(num);
   num+=2; 
}

// print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
var num = 300
while(num < 333) {
    num+=2;
    num--;
    console.log(num);
}

// another method for the above problem
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
var num = 300
while(num < 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num+=1;
}    

// print all numbers divisible by 5 and 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")
var num = 5
while(num <=50) {
    if(num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num+=1;
}
