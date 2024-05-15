//strings



// //reverse
// let str = prompt("enter the name to reverse");
// let rev = "";
// let len = str.length-1;

// for(let i = len;i>=0;i--){
//     rev += str[i];
// }
// alert(rev);




// let str = 'farzeen';
// let empty = "";
// let len = str.length;

// for(let i=0;i<len;i++){
//     let duplicate = false;

//     for(let j=0;j<len;j++){
//         if(str[i] == str[j]){
//             duplicate = true;
//             break;
//         }
//     }

//     if(!duplicate){
//         empty += str[i];
//     }


// }

// console.log(empty);

// Templates in Javascript

// let student = {
//     name : "farzeen",
//     registerno : 112113
// }

// for(let i in student){
//     console.log(i + "  " +student[i]);
// }

// let output = `name is ${student.name} and register number is ${student.registerno}`

// console.log(output);


// console.log("name is ", student.name , "register no is", student.registerno);

let str = prompt("Enter your full name");
str1="@";
str2= str.length;

let newstr = str1+str;
newstr = newstr.concat(str2);
console.log(newstr);
// console.log("@"+str+str.length);