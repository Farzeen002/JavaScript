// let arr = [20,40,37,85,23];

// const output = arr.reduce((res, curr) => {
//     return res < curr ? res : curr;
// });

// console.log(output);

// let marks = [85,93,96,97,88,25,47,65,55];

// let output = marks.filter ((val)=>{
//     return val > 90;
// });

// console.log(output);

let n = prompt("enter the size of array");
let arr = [];

for(let i=1;i<=n;i++){
   arr[i-1] = i;
   
}

  let res = arr.reduce((prev,curr) => {
    return prev*curr;
  })
  console.log(res);

