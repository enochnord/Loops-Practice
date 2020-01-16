// for loops practice //

// print all numbers betwwen -10 and 19 //
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")
for(var num = -10; num < 20; num++) {
    console.log(num)
}

// print all even numbers between 11 and 40 //
console.log("PRINT ALL EVEN NUMBERS BETWEEN 11 AND 40")
for(var num = 11; num <= 40; num++) {
    if(num % 2 === 0) {
        console.log(num);
    }
}

// print all odd numbers betwwen 300 and 333 //
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
for(var num = 300; num <= 333; num++) {
    if(num % 2 !== 0) {
        console.log(num);
    }
} 

// print all numbers divisible by 5 and 3 //
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")
for(var num = 5; num <=50; num++) {
    if(num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
}
