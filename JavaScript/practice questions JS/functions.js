// function test (msg, n) {
//     //parameter input
//     console.log(msg,n);
// }

// test("Hi farzeen", 2000) //argument


// // sun of 2 numbers
// function sum(a,b){
//     cal = a+b;
//     return cal;
// }

// let result = sum(7,6);
// console.log(result);


// // arrowfunction
// let basic = (n1,n2) => {
//     // console.log(n1 + n2);
//     return n1 + n2;
// }

// let bas = (15,35);
// console.log(bas);

function vowels(str) {
    let count = 0;
    for(let char of str){
        if(char === 'a'|char === 'e'|char === 'i'|char === 'o'|char === 'u'){
            count++;
            console.log(char,count);
        }
    }

    return count;  
}

let res = vowels("farzeen");
console.log(res);



// let arrow = (str) => {
//     let count = 0;
//         for(let char of str){
//             if(char === 'a'|char === 'e'|char === 'i'|char === 'o'|char === 'u'){
//                 count++;
//                 console.log(char,count);
//             }
//         }
    
//         return count;  
// };

// let arrow1 = arrow("farzeen");
// console.log(arrow1);

// arrow("farzeen");