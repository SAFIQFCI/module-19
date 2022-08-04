// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//      console.log(sum);
//     return 15;
// }

// add(48, 98);

// var total = add(80, 20);
// console.log('total', total);

// function bringSingara(money){
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice;
//     return quantity;
// }

// var myTaka = 159;
//  var singara = bringSingara(myTaka);
//  console.log('eating singara', singara);

// 

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60; 
const assignment2Marks = 58;
const assignment3Marks = 57;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far', myAverage);