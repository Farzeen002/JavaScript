// let a=0;
// for (let i=0;i<=5;i++){
//     a += i; 
// }
// console.log(a);

// var a=0;
// for (var i=0;i<=5;i++){
//     a += i; 
// }
// console.log(a);


//This is for of -- for data types like strings, --
let str = "Farzeen";
let size = 0;
for (let i of str){
  size ++;
    console.log(i);
}

console.log(size);


//This is for in -- for objects to return keys

let student = {
  name : "Farzeen",
  designation : "Software Developer",
  company : "Infomatics",
  rating : 4
}

for(let i in student){

  console.log("key = " + i + " : " + student[i]);
}




