//  let marks = [85,97,44,37,76,60];
// let sum = 0;
// let avg = 0;

// for(let i=0;i<marks.length;i++){
//     sum = sum + marks[i];
   
// }

// // for(let val of marks){
// //     sum += val;
// // }
// console.log(sum);
// avg = sum/marks.length;

// console.log(`Average marks is ${avg}`);


 prices = [250,645,300,900,50];
 discount = 0;
 offerPrice = 0;
// for(let dprice of prices){
//      discount += dprice *10/100;
// }
for( i=0;i<prices.length;i++){
    discount = prices[i] * 10/100;
    console.log(discount);
    
       offer = prices[i] - discount;
   
    console.log(`offer price for ${prices[i]} is ${offer}`);

}








    