let marks = [85,97,44,37,76,60];

let sum = 0;

for (let value of marks) {
    sum = sum + value;
}

let avg = sum / marks.length;
console.log(`Average marks of the class is: ${avg}`); 

let item = [10,20,30,40,50];

for (let i = 0; i < item.length; i++) {
    let offer = item[i] / 10;   // item[0]= 10/10=1
     item[i] -= offer;          // after discount = 10-1=9
}

console.log(`Values of items after discount : ${item}`);