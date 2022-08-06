const arr= [50,81,9,"shaileh","bhatt"]
//push = adding element into last:
arr.push('vinay');
arr.push(2,"nilesh",66,"gautam");
console.log(arr[0],arr[5]);
//pop = removeing element from last:
arr.pop(arr);
//shift= removeing element from start:
arr.shift(arr);
//unshift= adding element from start:
arr.unshift(1000);
//map= create new array of array:
const map =arr.map(x => x*2);
console.log(map);
//forEach= calling particular element:
arr.forEach(element => console.log(element));
//slice=
console.log(arr.slice(2,5));
//splice= replace and adding element:
const month = ["jan","fab","april","june"]
month.splice(2,0,"march");
console.log(month);
//filter
const fruits = ["apple", "banana","graps","orange"]
const filter = fruits.filter(fruits=> fruits.length<6);
console.log(filter);
