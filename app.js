// Q# 1

var arry= [[],[]]

// Q#2 

// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// console.log(arr)

// // Q#3
// var arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)

// Q#4

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// q#6

var counting = [];
var reverseCounting = [];
var even = [];
var odd = [];
var series = [];

for (let i = 1; i <= 15; i++) {
    counting.push(i);

    if (i <= 15) {
        reverseCounting.unshift(15 - i);
    }

    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }

    series.push(i * 2 + 'k');
}

console.log(even)
console.log(odd)
console.log(reverseCounting)
console.log(series)
console.log(counting)



