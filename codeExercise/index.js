let obj = {
    value : 50
};

let obj2 = obj;

console.log (obj);
console.log (obj2);

obj = {
    value : 70,
    name: 'name'

}
console.log (obj);
console.log (obj2);

let a = {
    toString : function() {
        console.log('to string');
        return 5;
    }
};
console.log('a', +(a+42));
console.log('a', !! a);

 let b = {

 };
 console.log('B',+ b);
 console.log('B', Number(b));

console.log('result is', "3" < "11")

    function hello (msg) {
        msg = msg || "how are you";
        console.log("hello", msg)
    }
    hello(0);
    function Es 6

    function hello (msg= "How are you"){
        console.log("hello", msg)
    }
    hello(0)

    let arr = [10,30];
    let i = 0;
    arr[i++] += 1;
    console.log(arr)

    ++ excute one time only so output is 11 and 30
    function getNumber () {
        console.log("getNumber")
        return 0;
    }
    arr[getNumber()] += 1; // != arr [getIndex()] = arr[getIndex()] +1
    my opinion ( [10+1],30) because function one time call and excute one time and the left (n) remains the default.
    console.log('number', arr)

only one time call function ,too.


let frequency = {};
for(let letter of "mississippi") {
 if (frequency[letter]) {
 frequency[letter]++;
 } else {
 frequency[letter] = 1;
 }
}
Console.log()

let nums = [10,20,30,30,20];
let val = 20;

var removeElement = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    return nums.length;
};
console.log("result ",removeElement())


let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
console.log('result ',wordSet);
let unique = [];
for(let word of wordSet) {
 unique.push(word);
}
console.log('re ',unique);

let array = [10,20,30]
for (let val of array) {
    console.log('value ',val);
}

let number = [10,20,30];

let result =number.flatMap(x => x * x);
console.log('result ',result)

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let result = arr1.sort((a,b) => b - a);
console.log('result ',result);

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var uniqueArray = [...new Set(arr1)];
console.log('unique ',uniqueArray);

var str = 'Hi ,Myanmar ,pYay ,Yay';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result3 = [];

for( let x = 0 ; x<str.length; x++)
{
    if(UPPER.includes(str[x])){
        result3.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
        {
            result3.push(str[x].toUpperCase());
        } else {
        result3.push(str[x]);
    }
}

console.log(result3.join(''))

const array=[1,2,3,4,5,6,7,8]
let s = 0;
let p = 1;
for (let i = 0;i<array.length;i++)
{
    s += array[i];
    p *= array[i];
}

console.log('sum ',s ,'and ', 'p ',p)


let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"]

for(let i = 0;i < color.length;i++)
{
    if(i<o.length-1)
    {
        console.log(i+1+o[i+1]+"choice is "+color[i])
    }
    if(i>= o.length-1)
    {
        console.log(i+1+o[0]+'choice is '+color[i])
    }
}